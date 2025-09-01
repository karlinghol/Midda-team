const tabs = document.querySelectorAll(".catalog-tabs .tab");
const underline = document.querySelector(".catalog-tabs .tab-underline");

function moveUnderline(el) {
    const tabRect = el.getBoundingClientRect();
    const containerRect = el.parentElement.parentElement.getBoundingClientRect();

    const shrink = 20;
    underline.style.width = (tabRect.width - shrink) + "px";
    underline.style.left = (tabRect.left - containerRect.left + shrink / 2) + "px";
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        moveUnderline(tab);
    });
});

window.addEventListener("load", () => {
    const activeTab = document.querySelector(".catalog-tabs .tab.active");
    if (activeTab) moveUnderline(activeTab);
});
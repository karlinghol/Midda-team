function removeFoodItem(event) {
    event.preventDefault();

    const itemToRemove = event.target.closest('.calender_item');
    itemToRemove.setAttribute("data-pending-delete", "true");

    document.getElementById("overlay").classList.add("active");
    document.getElementById("confirm-delete").classList.add("active");
}

function hideConfirmBox() {
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("confirm-delete").classList.remove("active");

    const pending = document.querySelector(".calender_item[data-pending-delete]");
    if (pending) pending.removeAttribute("data-pending-delete");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".confirm-btn").addEventListener("click", () => {
        const pending = document.querySelector(".calender_item[data-pending-delete]");

        let emptyItem = `
        <div class = "calender_item" id = "empty">
            <div class="add_icon"></div>
            <div class="day">
                <p>${pending.querySelector(".day p").textContent}</p>
            </div>
        </div>
        `;
        
        if (pending) {
            pending.outerHTML = emptyItem;
        };
        hideConfirmBox();
    })

    document.querySelector(".cancel-btn").addEventListener("click", hideConfirmBox);

    // Click outside closes the pop up
    document.getElementById("overlay").addEventListener("click", hideConfirmBox);
})
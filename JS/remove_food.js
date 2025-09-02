export let removedFoodItems = [];

export function removeFoodItem(event) {
    event.preventDefault();

    const itemToRemove = event.target.closest('.calendar_item');
    itemToRemove.setAttribute("data-pending-delete", "true");

    document.getElementById("overlay").classList.add("active");
    document.getElementById("confirm-delete").classList.add("active");
}

function hideConfirmBox() {
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("confirm-delete").classList.remove("active");
    

    const pending = document.querySelector(".calendar_item[data-pending-delete]");
    if (pending) pending.removeAttribute("data-pending-delete");
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", removeFoodItem);
    });

    const confirmBtn = document.querySelector(".confirm-btn");
    if (confirmBtn) {
        confirmBtn.addEventListener("click", () => {
            const pending = document.querySelector(".calendar_item[data-pending-delete]");

            if (pending) {

                const temp = document.createElement('div');
                temp.innerHTML = `
                <div class = "calendar_item" id = "empty">
                    <button class="add-empty">
                    <div class="add_icon"></div>
                    <div class="day">
                        <p>${pending.querySelector(".day p").textContent}</p>
                    </div>
                    </button>
                </div>
                `;
            
                const newItem = temp.firstElementChild;

                const addBtn = newItem.querySelector(".add-empty");
                addBtn.addEventListener("click", () => {
                    document.querySelector(".search-filter-container").scrollIntoView({ behavior: 'smooth' })
                });

                removedFoodItems.push(pending);
                pending.replaceWith(newItem);
            }

            hideConfirmBox();
            console.log(removedFoodItems);
        });
    }

    const cancelBtn = document.querySelector(".cancel-btn");
    if (cancelBtn) {
        cancelBtn.addEventListener("click", hideConfirmBox);
    }

    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.addEventListener("click", hideConfirmBox);
    }
});
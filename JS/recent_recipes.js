import { removedFoodItems } from "./remove_food.js";

console.log(removedFoodItems, "hei")

const shownTab = document.querySelector(".search-results");

const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if(mutation.type === "attributes" && mutation.attributeName === "data-active-tab") {
            if (shownTab.getAttribute("data-active-tab") === "Nylige") {
                console.log("Viser nylige oppskrifter");
                showRecentRecipes();
            }

            else if (shownTab.getAttribute("data-active-tab") === "Forslag") {
                console.log("Viser foreslåtte oppskrifter");
                showSuggestedRecipes();
            }

            else if (shownTab.getAttribute("data-active-tab") === "Alle") {
                console.log("Viser alle oppskrifter");
                showAllRecipes();
            }
        }
    }
});

observer.observe(shownTab, { attributes: true });

function showRecentRecipes() {
    const temp = document.createElement('div');
    
    for (let item of removedFoodItems) {
        const itemImg = item.querySelector("img").src;
        const itemName = item.querySelector("h2").textContent;

        temp.innerHTML += `
            <div>
                <img src="${itemImg}" alt="${itemName}">
                <h2>${itemName}</h2>
            </div>
        `
    }

    shownTab.innerHTML = temp.innerHTML;
}

function showSuggestedRecipes() {
    shownTab.innerHTML = "";
}

function showAllRecipes() {
    shownTab.innerHTML = "";
}
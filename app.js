const recipeJson = "recipes.json";

let allPotionsList = document.getElementById("list-of-potions");
let allPotionsUnorderedList = document.createElement("ul");
allPotionsList.appendChild(allPotionsUnorderedList);
let selectedPotionsList = document.getElementById("list-of-selected-potions");
let potionsImg = document.getElementById("potions-icon");
let potionsDescription = document.getElementById("potions-information");
// id selectors for the navigation
let infoButton = document.getElementById("info-btn");
let IngredientsButton = document.getElementById("ingredients-btn");



/* 
<li class="potions-container-list-item">
    <div class="potion-container">
        <label for="potion-0">
            <input type="checkbox" name="select-0" id="potion-0">
            <img id="potion-0-img" src="" alt="">
            <p id="potion-0-name"></p>
            <p id="potion-0-description"></p>
        </label>
    </div>
</li> 
*/

$.getJSON( recipeJson, function( data ) {
    let potions = data.potions;
    for (let i = 0; i < potions.length; i++) {
        let potion = potions[i];
        
        let potionName = potion.name;
        let potionIngredients = potion.ingredients;
        let potionDescription = potion.description;
        let potionDuration = potion.duration;
        let potionImg = potion.icon;
        let potionHardmode = potion.hardmode;

        let potionsConatainerListItem = document.createElement("li");
        potionsConatainerListItem.classList.add("potions-container-list-item");

        let potionContainer = document.createElement("div");
        potionContainer.classList.add("potion-container");

        let potionLabel = document.createElement("label");
        potionLabel.setAttribute("for", "potion-" + i);

        let potionInput = document.createElement("input");
        potionInput.setAttribute("type", "checkbox");
        potionInput.setAttribute("name", "select-" + i);
        potionInput.setAttribute("id", "potion-" + i);

        let potionImgElement = document.createElement("img");
        potionImgElement.setAttribute("id", "potion-" + i + "-img");
        potionImgElement.setAttribute("src", potionImg);
        potionImgElement.setAttribute("alt", potionName);

        let potionNameElement = document.createElement("p");
        potionNameElement.setAttribute("id", "potion-" + i + "-name");
        potionNameElement.innerHTML = potionName;

        let potionDescriptionElement = document.createElement("p");
        potionDescriptionElement.setAttribute("id", "potion-" + i + "-description");
        potionDescriptionElement.innerHTML = potionDescription;

        potionLabel.appendChild(potionInput);
        potionLabel.appendChild(potionImgElement);
        potionLabel.appendChild(potionNameElement);
        potionLabel.appendChild(potionDescriptionElement);

        potionContainer.appendChild(potionLabel);
        potionsConatainerListItem.appendChild(potionContainer);
        allPotionsUnorderedList.appendChild(potionsConatainerListItem);

        // add event listener to the checkbox
        let potionInputElement = document.getElementById("potion-" + i);
        potionInputElement.addEventListener("change", function() {
            // if (potionInputElement.checked) {
            //     // add potion to the selected potions list
            //     let potionContainer = document.createElement("div");
            //     potionContainer.classList.add("potion-container");
            //     potionContainer.setAttribute("id", "potion-" + i);

            //     let potionImgElement = document.createElement("img");
            //     potionImgElement.setAttribute("src", potionImg);
            //     potionImgElement.setAttribute("alt", potionName);

            //     let potionNameElement = document.createElement("p");
            //     potionNameElement.innerHTML = potionName;

            //     let potionDescriptionElement = document.createElement("p");
            //     potionDescriptionElement.innerHTML = potionDescription;

            //     potionContainer.appendChild(potionImgElement);
            //     potionContainer.appendChild(potionNameElement);
            //     potionContainer.appendChild(potionDescriptionElement);

            //     selectedPotionsList.appendChild(potionContainer);
            //     potionsImg.setAttribute("src", potionImg);
            //     potionsDescription.innerHTML = potionDescription;
            // } else {
            //     // remove potion from the selected potions list
            //     let selectedPotionContainer = document.getElementById("potion-" + i);
            //     selectedPotionsList.removeChild(selectedPotionContainer);
            //     if (selectedPotionsList.children.length === 0) {
            //         potionsImg.setAttribute("src", "");
            //         potionsDescription.innerHTML = "";
            //     }
            // }
            if (potionInputElement.checked) {
                let potname = document.createElement("p")
                potname.innerHTML = potionName;
                potname.setAttribute("id", "potion-" + i + "-namee");
                selectedPotionsList.appendChild(potname);
            } else {
                let pootname = document.getElementById("potion-" + i + "-namee");
                selectedPotionsList.removeChild(pootname);
            }
        });
    }
});



// let checkBox = document.getElementById('potion-0'); //testing event listener on checkbox event listener with form
// checkBox.addEventListener('click', function() {
//     if (checkBox.checked) {
//         selectedPotionsList.appendChild(allPotionsList.children[0]);
//     } else {
//         allPotionsList.appendChild(selectedPotionsList.children[0]);
//     }
// }
// );

const recipeJson = "recipes.json";

let allPotionsList = document.getElementById("list-of-potions");
let allPotionsUnorderedList = document.createElement("ul");
allPotionsUnorderedList.setAttribute("id", "all-potions-list");
allPotionsList.appendChild(allPotionsUnorderedList);
let selectedPotionsList = document.getElementById("list-of-selected-potions");
let potionsImg = document.getElementById("potions-icon");
let potionsDescription = document.getElementById("potions-information");
// id selectors for the navigation


$.getJSON( recipeJson, function( data ) {
    let potions = data.potions;
    let materials = data.Ingredients
    for (let i = 0; i < potions.length; i++) {
        let potion = potions[i];
        // collect all the potion information from the json file
        let potionName = potion.name;
        let potionIngredients = potion.Ingredients;
        let potionDescription = potion.description;
        let potionDuration = potion.duration;
        let potionImg = potion.icon;
        let potionHardmode = potion.hardmode;
        // create a list item for each potion
        let potionsConatainerListItem = document.createElement("li");
        potionsConatainerListItem.classList.add("potions-container-list-item");
        // create the potion container to place the potion information into
        let potionContainer = document.createElement("div");
        potionContainer.classList.add("potion-container");
        potionContainer.onmouseover = function() {
            
            document.getElementById("potion-image").removeChild(document.getElementById("potion-image").firstChild);
            document.getElementById("potion-name").removeChild(document.getElementById("potion-name").firstChild);
            document.getElementById("potion-duration").removeChild(document.getElementById("potion-duration").firstChild);
            document.getElementById("potion-description").removeChild(document.getElementById("potion-description").firstChild);
            document.getElementById("potion-ingredients").removeChild(document.getElementById("potion-ingredients").firstChild)
            
            let hoveredPotionIcon = document.createElement("img");
            hoveredPotionIcon.setAttribute("src", potionImg);
            document.getElementById("potion-image").appendChild(hoveredPotionIcon);

            let hoveredPotionName = document.createElement("h3");
            hoveredPotionName.innerHTML = potionName;
            hoveredPotionName.style.fontFamily = "andyBold";
            document.getElementById("potion-name").appendChild(hoveredPotionName);

            let hoveredPotionDuration = document.createElement("p");
            hoveredPotionDuration.innerHTML = potionDuration;
            hoveredPotionDuration.style.fontFamily = "andyBold";
            document.getElementById("potion-duration").appendChild(hoveredPotionDuration);

            let hoveredPotionDescription = document.createElement("p");
            hoveredPotionDescription.innerHTML = potionDescription;
            hoveredPotionDescription.style.fontFamily = "andyBold";
            document.getElementById("potion-description").appendChild(hoveredPotionDescription);
            // create a ul element to hold ingredients for hovered potion
            let hoveredPotionIngredientsList = document.createElement("ul")
            hoveredPotionIngredientsList.id = "list-of-ingredients"
            document.getElementById("potion-ingredients").appendChild(hoveredPotionIngredientsList)
            // format and place potion ingredients into the container
            for (let ing=0; ing<potionIngredients.length; ing++){
                let ingredient=potionIngredients[ing]
                let ingredientcontainer = document.createElement("li")
                //img element
                let hoveredIngredientImage = document.createElement("img")
                hoveredIngredientImage.setAttribute("src",materials[ingredient["Ingredient"]].icon)
                ingredientcontainer.appendChild(hoveredIngredientImage)
                //name and quantity element
                let hoveredIngredientNameAndQuantity = document.createElement("p")
                hoveredIngredientNameAndQuantity.innerHTML = ingredient["Ingredient"]+" Quantity: "+ingredient["Quantity"]
                hoveredIngredientNameAndQuantity.style.fontFamily = "andyBold"
                ingredientcontainer.appendChild(hoveredIngredientNameAndQuantity)
                document.getElementById("list-of-ingredients").appendChild(ingredientcontainer)
            }
        }
        potionContainer.style.width = "200px";
        potionContainer.style.height = "80px";
        // create the label for the potion
        let potionLabel = document.createElement("label");
        potionLabel.setAttribute("for", "potion-" + i);
        // create the checkbox to move the potion to the selected potions list
        let potionInput = document.createElement("input");
        potionInput.setAttribute("type", "checkbox");
        potionInput.setAttribute("name", "select-" + i);
        potionInput.setAttribute("id", "potion-" + i);
        potionInput.style.float = "left";
        // create the potion icon
        let potionImgElement = document.createElement("img");
        potionImgElement.setAttribute("id", "potion-" + i + "-img");
        potionImgElement.setAttribute("src", potionImg);
        potionImgElement.setAttribute("alt", potionName);
        potionImgElement.style.float = "left";
        // create the potion name
        let potionNameElement = document.createElement("p");
        potionNameElement.setAttribute("id", "potion-" + i + "-name");
        potionNameElement.innerHTML = potionName;
        potionNameElement.style.fontFamily = "andyBold";
        potionNameElement.style.float = "left";
        potionNameElement.style.margin = "0px";
        potionNameElement.style.position = "relative";
        potionNameElement.style.left = "5px";
        // create the potion description
        let potionDescriptionElement = document.createElement("p");
        potionDescriptionElement.setAttribute("id", "potion-" + i + "-description");
        potionDescriptionElement.innerHTML = potionDescription;
        potionDescriptionElement.style.fontFamily = "andyBold";
        potionDescriptionElement.style.width = "160px";
        potionDescriptionElement.style.position = "relative";
        potionDescriptionElement.style.margin = "0px";
        potionDescriptionElement.style.top = "0px";
        potionDescriptionElement.style.right = "-2px";
        potionDescriptionElement.style.float = "right";
        // append the potion information to the potion container
        potionLabel.appendChild(potionInput);
        potionLabel.appendChild(potionImgElement);
        potionLabel.appendChild(potionNameElement);
        potionLabel.appendChild(potionDescriptionElement);
        // append the potion container to the potion container list item
        potionContainer.appendChild(potionLabel);
        potionsConatainerListItem.appendChild(potionContainer);
        allPotionsUnorderedList.appendChild(potionsConatainerListItem);

        // add event listener to the checkbox
        let potionInputElement = document.getElementById("potion-" + i);
        potionInputElement.addEventListener("change", function() {
            if (potionInputElement.checked) {
                // create a conatiner to put selected potion information into
                let selectedPotionContainer = document.createElement("div");
                selectedPotionContainer.classList.add("selected-potion-container");
                selectedPotionContainer.setAttribute("id", "potion-" + i + "-container-selected");
                selectedPotionsList.appendChild(selectedPotionContainer);
                // create the potion icon to put into the container
                let potionImgElement = document.createElement("img");
                potionImgElement.setAttribute("src", potionImg);
                potionImgElement.setAttribute("alt", potionName);
                potionImgElement.setAttribute("id", "potion-" + i + "-img-selected");
                potionImgElement.classList.add("potion-img-selected");
                // create the potion name to put into the container
                let potionNameElement = document.createElement("p");
                potionNameElement.innerHTML = potionName;
                potionNameElement.setAttribute("id", "potion-" + i + "-name-selected");
                potionNameElement.classList.add("potion-name-selected");
                potionNameElement.style.fontFamily="andyBold"
                // create the potion description to put into the container
                let potionDescriptionElement = document.createElement("p");
                potionDescriptionElement.innerHTML = potionDescription;
                potionDescriptionElement.setAttribute("id", "potion-" + i + "-description-selected");
                potionDescriptionElement.classList.add("potion-description-selected");
                potionDescriptionElement.style.fontFamily = "andyBold"
                
                // place all the potion info into the container
                selectedPotionContainer.appendChild(potionImgElement);
                selectedPotionContainer.appendChild(potionNameElement);
                selectedPotionContainer.appendChild(potionDescriptionElement);
            } else {
                // remove the potion from the selected potions list
                let selectedPotionContainer = document.getElementById("potion-" + i + "-container-selected");
                selectedPotionsList.removeChild(selectedPotionContainer);
            }
        });
    } // end of for loop
});


//navigation
let infoButton = document.getElementById("info-btn");
let IngredientsButton = document.getElementById("ingredients-btn");
let gridButton = document.getElementById("grid-button");
let listButton = document.getElementById("list-button");
let container = document.getElementById("display-container");

//Function to change display from grid to flex
function changeDisplay(display){
    if(display == "grid"){
        //Change display style
        container.classList.remove("list-container");
        container.classList.add("grid-container");

        //Change button background color
        listButton.classList.remove("selected");
        gridButton.classList.add("selected");
    }

    else{
        //Change display style
        container.classList.remove("grid-container");
        container.classList.add("list-container");

        //Change button background color
        gridButton.classList.remove("selected");
        listButton.classList.add("selected");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        let colorStr = "rgb(" + r + ", " + g + ", " + b +")";
        return colorStr;
    }

    let headerContainer = document.createElement("div");
    headerContainer.className = "header-container";

    // Iterates through h1...h6 to create structure and functions for all elements
    for (i = 1; i <= 6; i++) {
        let hID = "h" + i;
        let header = document.createElement(hID);
        let headerText = document.createTextNode("This is an " + hID);
        header.className = hID;
        header.appendChild(headerText);
        header.addEventListener("dblclick", function () {
            header.style.color = getRandomColor();
        });
        headerContainer.appendChild(header);
    }

    document.body.appendChild(headerContainer);

    let btn = document.createElement("button");
    let buttonText = document.createTextNode("Click to add new list item");
    btn.className = "addLiButton";
    btn.appendChild(buttonText);
    document.body.appendChild(btn);

    let myList = document.createElement("ul");
    let liIndex = 0;

    btn.addEventListener("click", function () {
        let li = document.createElement("li");
        let liText = document.createTextNode("This is list item " + (liIndex + 1));
        li.appendChild(liText);
        
        li.addEventListener("click", function() {
            li.style.color = getRandomColor();
        });

        li.addEventListener("dblclick", function() {
            li.remove();
        });

        document.body.appendChild(li);
        liIndex++;
    });
});
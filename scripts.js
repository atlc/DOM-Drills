document.addEventListener('DOMContentLoaded', function () {
    let colorArr = ["red", "orange", "yellow", "green", "blue", "purple", "darkblue", "black"];
    
    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1)
        let g = Math.floor((Math.random() * 255) + 1)
        let b = Math.floor((Math.random() * 255) + 1)
        let colorStr = "rgb(" + r + ", " + g + ", " + b +")"
        return colorStr;
    }

    let header = document.createElement("h1");
    let headerText = document.createTextNode("This is an h1");
    header.className = "h1";
    header.appendChild(headerText);
    header.addEventListener("dblclick", function () {
        header.style.color = getRandomColor();
    });

    let header2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2");
    header2.className = "h2";
    header2.appendChild(h2Text);
    header2.addEventListener("dblclick", function () {
        header2.style.color = getRandomColor();
    });

    let header3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3");
    header3.className = "h3";
    header3.appendChild(h3Text);
    header3.addEventListener("dblclick", function () {
        header3.style.color = getRandomColor();
    });

    let header4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4");
    header4.className = "h4";
    header4.appendChild(h4Text);
    header4.addEventListener("dblclick", function () {
        header4.style.color = getRandomColor();
    });

    let header5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is an h5");
    header5.className = "h5";
    header5.appendChild(h5Text);
    header5.addEventListener("dblclick", function () {
        header5.style.color = getRandomColor();
    });

    let header6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is an h6");
    header6.className = "h6";
    header6.appendChild(h6Text);
    header6.addEventListener("dblclick", function () {
        header6.style.color = getRandomColor();
    });

    let headerContainer = document.createElement("div");
    headerContainer.className = "header-container";

    headerContainer.appendChild(header);
    headerContainer.appendChild(header2);
    headerContainer.appendChild(header3);
    headerContainer.appendChild(header4);
    headerContainer.appendChild(header5);
    headerContainer.appendChild(header6);

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

    let listItem = document.getElementById("listItem"); //id List was non existent
    let addButton = document.querySelector("#listItem + input");
    let ul = document.querySelector("ul"); //Selector spelled Select

    addButton.onclick = (e) => {
        // preventDefault added
        e.preventDefault();

        let li = document.createElement("li");
        let delButton = document.createElement("button");
        let checkBox = document.createElement("input");

        checkbox.type = "checkbox";
        let item = listItem.value;
        li.textContent = item;
        delButton.textContent = "Got It!";

        li.appendChild(delButton);
        li.appendChild(checkBox);
        ul.appendChild(li);// li in ""

        delButton.onclick = deleteIt;
    };

    function deleteIt(e) {
        alert("Are you sure you want to delete this from your grocery list?");
        let delItem = e.target.closest("li");// closest
        delItem.remove();
    }
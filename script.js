let textBoxInput = document.getElementById("text-box");

textBoxInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let inputText = textBoxInput.value;
        let para = document.createElement("p");
        let node = document.createTextNode(inputText);
        para.appendChild(node);
        let element = document.getElementById("todo-entries")
        element.appendChild(para);
        textBoxInput.value = "";
    }
});


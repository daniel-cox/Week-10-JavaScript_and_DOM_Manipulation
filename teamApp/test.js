let button = document.getElementById("btn");
let content = document.getElementById("content");

document.getElementById("content").innerHTML = "Goodbye.";

button.addEventListener("click", () => {
  if (content.innerHTML === "Goodbye.") {
    content.innerHTML = "Hello.";
  } else content.innerHTML = "Goodbye.";
});

document.getElementById("remove").addEventListener("click", () => {
  // use the child to find the parrent, and then remove the child element.
  content.parentNode.removeChild(content);
});

document.getElementById("add").addEventListener("click", () => {
  let parent = document.getElementById("paragraphs");
  let newElement = document.createElement("p");
  newElement.innerHTML = `<p>this is a new paragraph.</p>`;
  parent.appendChild(newElement);
});

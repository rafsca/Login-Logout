const isLogged = localStorage.getItem("isLogged");
const nodeButton = document.createElement("button");
const node = document.getElementById("root");
node.appendChild(nodeButton);
function onDocumentLoaded() {
  if (isLogged === "true") {
    nodeButton.textContent = "Logout";
  } else {
    nodeButton.textContent = "Login";
  }
}

function onButtonClick() {
  const isLogged = localStorage.getItem("isLogged");
  if (isLogged === "true") {
    localStorage.setItem("isLogged", "false");
  } else {
    localStorage.setItem("isLogged", "true");
  }
  onDocumentLoaded();
  location.reload();
}

nodeButton.addEventListener("click", onButtonClick);

addEventListener("DOMContentLoaded", onDocumentLoaded);

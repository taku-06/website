const toggleButton = document.getElementById("dark-mode-toggle");
const bodyElement = document.body;

toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
});
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

changeHeaderButton.addEventListener("click", () => {
    header.textContent = "POW!!!!!";
});

function changeButtonText() {
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme";
    } else {
        changeThemeButton.textContent = "Switch to Dark Theme";
    }
}

changeThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    changeButtonText();
});

img1.addEventListener("click", () => {
    img2.classList.remove("hidden");
    img1.setAttribute("aria-expanded", "true");
});

img2.addEventListener("click", () => {
    img3.classList.remove("hidden");
    img2.setAttribute("aria-expanded", "true");
});

img3.addEventListener("click", () => {
    img2.classList.add("hidden");
    img3.classList.add("hidden");
    img1.setAttribute("aria-expanded", "false");
    img2.setAttribute("aria-expanded", "false");
    img1.focus();
});

function activateImageWithKeyboard(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.currentTarget.click();
    }
}

img1.addEventListener("keydown", activateImageWithKeyboard);
img2.addEventListener("keydown", activateImageWithKeyboard);
img3.addEventListener("keydown", activateImageWithKeyboard);

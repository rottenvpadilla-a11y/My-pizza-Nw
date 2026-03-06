const tabButtons = document.querySelectorAll(".foodTabs");
const tabContents = document.querySelectorAll(".foodItem");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearActiveTabs();
    clearActiveContents();
    button.classList.add("active");

    const correspondingContent = document.querySelector(
      `#${button.id}-details`,
    );
    if (correspondingContent) {
      correspondingContent.classList.add("active");
    }
  });
});

function clearActiveTabs() {
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

function clearActiveContents() {
  tabContents.forEach((button) => {
    button.classList.remove("active");
  });
}

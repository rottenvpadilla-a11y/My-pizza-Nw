const titles = document.querySelectorAll(".years__title");
const details = document.querySelectorAll(".years__detail");

titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    details.forEach((detail, i) => {
      if (i !== index) {
        detail.classList.remove("open");
        titles[i].querySelector("svg").classList.remove("rotate-180");
      }
    });

    // Toggle current one
    details[index].classList.toggle("open");
    title.querySelector("svg").classList.toggle("rotate-180");
  });
});

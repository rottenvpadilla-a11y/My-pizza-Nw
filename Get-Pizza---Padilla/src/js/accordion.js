const timeline = document.querySelectorAll(".timeline");

timeline.forEach((item) => {
  const year = item.querySelector(".year");
  const detail = item.querySelector(".detail");

  //click event 
  year.addEventListener("click", () => {
    //check if the clicked item is already open
    const open = item.classList.contains("active");

    //close
    timeline.forEach((i) => {
      // remove active state
      i.classList.remove("active");
      //   reset max height into 0
      i.querySelector(".detail").style.maxHeight = null;
    });

    // if the clicked item was not open, then you need to add an active to manipulate it to css
    if (!open) {
      item.classList.add("active");

      //   we need to set max height dynamically based on its content
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
const storyBtns = document.querySelectorAll(".story-btn");

storyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    btn.nextElementSibling.classList.toggle("active");
  });
});

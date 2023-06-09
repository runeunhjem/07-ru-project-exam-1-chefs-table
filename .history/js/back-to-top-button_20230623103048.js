const backToTopButton = document.querySelector(".back-to-top-button");

function toTopButton() {
  window.addEventListener("scroll", () => {
    const desktopOffset = 400;
    const mobileOffset = 300;
    const pageYOffset = window.pageYOffset;
    const offset = window.innerWidth >= 768 ? desktopOffset : mobileOffset;

    if (pageYOffset > offset) {
      backToTopButton.classList.add("back-to-top-button-show");
    } else {
      backToTopButton.classList.remove("back-to-top-button-show");
    }
  });

}
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth behavior for scrolling
  });
});

export { toTopButton };

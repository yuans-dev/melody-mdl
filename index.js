const hasDataWidth = document.querySelectorAll("[data-width]");
hasDataWidth.forEach((element) => {
  console.log(element.style.width, element.dataset.width);
  element.style.width = `${element.dataset.width}%`;
});

const navBar = document.querySelector(".nav-bar");
const navBarBackground = getComputedStyle(document.body).getPropertyValue(
  "--primary"
);

window.addEventListener("scroll", function (e) {
  let percentage = this.scrollY / 100;
  if (percentage > 1) {
    percentage = 1;
  }
  let alphaHex = parseInt(percentage * 255)
    .toString(16)
    .padStart(2, "0");
  console.log(percentage, alphaHex);
  navBar.style.backgroundColor = `${navBarBackground}${alphaHex}`;
});

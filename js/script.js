const toggle = document.getElementById("mobileToggle");
const nav = document.querySelector("nav ul");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const carouselButtons = document.querySelectorAll(".carousel-button");

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const direction = button.dataset.direction;
    const carousel = document.getElementById(targetId);

    if (!carousel) return;

    const scrollAmount = carousel.clientWidth * 0.85;

    carousel.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  });
});

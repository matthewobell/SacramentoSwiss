const toggle = document.getElementById("mobileToggle");
const nav = document.querySelector("nav ul");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function updateCarouselButtons(carousel) {
  const wrapper = carousel.closest(".carousel-wrapper");
  if (!wrapper) return;

  const leftButton = wrapper.querySelector('.carousel-button[data-direction="left"]');
  const rightButton = wrapper.querySelector('.carousel-button[data-direction="right"]');

  if (!leftButton || !rightButton) return;

  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const currentScroll = carousel.scrollLeft;

  if (currentScroll <= 8) {
    leftButton.classList.add("is-hidden");
  } else {
    leftButton.classList.remove("is-hidden");
  }

  if (currentScroll >= maxScrollLeft - 8) {
    rightButton.classList.add("is-hidden");
  } else {
    rightButton.classList.remove("is-hidden");
  }
}

const carousels = document.querySelectorAll(".event-carousel");
carousels.forEach((carousel) => {
  updateCarouselButtons(carousel);

  carousel.addEventListener("scroll", () => {
    updateCarouselButtons(carousel);
  });

  window.addEventListener("resize", () => {
    updateCarouselButtons(carousel);
  });
});

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

    setTimeout(() => {
      updateCarouselButtons(carousel);
    }, 350);
  });
});

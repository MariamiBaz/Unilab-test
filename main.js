let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const prev = document.querySelector(".carousel-prev");
const next = document.querySelector(".carousel-next");

showSlide(slideIndex);

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

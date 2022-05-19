// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyNav();
};

// Get the navbar
let navbar = document.querySelector(".nav");

// Get the offset position of the navbar
let stickyNavBar = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= stickyNavBar) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// QUOTE ROLL-IN
const quoteContainer = document.querySelectorAll(".quote-section-2");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  quoteContainer.forEach((slide) => {
    const slideTop = slide.getBoundingClientRect().top;

    if (slideTop < triggerBottom) {
      slide.classList.remove("hide-header");
      slide.classList.add("roll-in-right");
    } else {
      slide.classList.remove("roll-in-right");
    }
  });
}

// CARD IMAGE FADE IN
const cardImage = document.querySelectorAll(".card-img");

window.addEventListener("scroll", fadeImg);

function fadeImg() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  cardImage.forEach((img) => {
    const slideTop = img.getBoundingClientRect().top;

    if (slideTop < triggerBottom) {
      img.classList.remove("hide-img");
      img.classList.add("fade-in");
    } else {
      img.classList.remove("fade-in");
      img.classList.add("hide-img");
    }
  });
}

// MODAL

document.querySelector(".menu-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

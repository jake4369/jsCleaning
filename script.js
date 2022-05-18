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

// MODAL

document.querySelector(".menu-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

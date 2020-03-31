//Selecting the DOM elements to manipulate their style
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var choosePlanButton = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

//Manipulating the selected elements
for (var i = 0; i < choosePlanButton.length; i++) {
  choosePlanButton[i].addEventListener("click", function() {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
}

toggleButton.addEventListener("click", function() {
  mobileNav.classList.toggle("open");
  backdrop.classList.toggle("open");
});

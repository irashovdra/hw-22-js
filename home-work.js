const openModalButton = document.querySelector('[data-action="open-modal"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".backdrop");

openModalButton.addEventListener("click", function () {
  document.body.classList.add("show-modal");
});

closeModalButton.addEventListener("click", function () {
  document.body.classList.remove("show-modal");
});

backdrop.addEventListener("click", function (event) {
  if (event.target === backdrop) {
    document.body.classList.remove("show-modal");
  }
});

const radioButtons = document.querySelectorAll('input[name="color"]');
radioButtons.forEach((button) => {
  button.addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
  });
});

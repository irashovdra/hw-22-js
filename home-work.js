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

// Task 3

const colorForm = document.getElementById("colorForm");
const radios = document.querySelectorAll('input[type="radio"][name="color"]');

function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.target.value;
}

for (const radio of radios) {
  radio.addEventListener("change", changeBackgroundColor);
}

// Task 4

document.getElementById("name-input").addEventListener("input", function () {
  const inputValue = this.value;
  const nameOutput = document.getElementById("name-output");

  if (inputValue === "") {
    nameOutput.textContent = "незнайомець";
  } else {
    nameOutput.textContent = inputValue;
  }
});

// Task 4

document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const inputValue = this.value;
    const dataLength = parseInt(this.getAttribute("data-length"));
    const inputBorder = this.classList;

    if (inputValue.length === dataLength) {
      inputBorder.remove("invalid");
      inputBorder.add("valid");
    } else {
      inputBorder.remove("valid");
      inputBorder.add("invalid");
    }
  });

// Task 5

document
  .getElementById("font-size-control")
  .addEventListener("input", function () {
    const fontSize = this.value + "px";
    document.getElementById("text").style.fontSize = fontSize;
  });

const select = document.querySelector(".select");
const optionBox = document.querySelector(".options");
const options = [...document.querySelectorAll(".options .item")];

const unFocusedSelect = () => {
  optionBox.classList.remove("active");
};

const focusedSelect = () => {
  optionBox.classList.toggle("active");
};

export { focusedSelect, unFocusedSelect };

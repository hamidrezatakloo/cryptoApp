const select = document.querySelector(".select");
const optionBox = document.querySelector(".options");
const options = [...document.querySelectorAll(".options .item")];

const unFocusedSelect = () => {
  optionBox.classList.remove("active");
};

const focusedSelect = () => {
  optionBox.classList.toggle("active");
};

let activeOption = 0;

const hoverOptions = (i) => {
  options[activeOption].classList.remove("active");
  options[i].classList.add("active");
  activeOption = i;
};

export { focusedSelect, unFocusedSelect };

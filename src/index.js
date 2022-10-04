import "./sass/index.sass";
import {
  focusedSelect,
  unFocusedSelect,
  startListenOptions,
} from "./selectInput";

startListenOptions();

const checkBox = document.querySelector(".checkbox");

document.addEventListener("click", (e) => {
  if (e.target.matches(".options>.item")) checkBox.classList.add("checked");

  if (!e.target.matches(".select")) {
    unFocusedSelect();
  } else {
    checkBox.classList.remove("checked");
    focusedSelect();
  }
});

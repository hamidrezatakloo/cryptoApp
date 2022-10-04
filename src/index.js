import "./sass/index.sass";
import { focusedSelect, unFocusedSelect } from "./selectInput";

document.addEventListener("click", (e) => {
  if (!e.target.matches(".select")) {
    unFocusedSelect();
  } else {
    focusedSelect();
  }
});

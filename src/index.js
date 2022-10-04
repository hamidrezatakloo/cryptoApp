import "./sass/index.sass";
import {
  focusedSelect,
  unFocusedSelect,
  startListenOptions,
} from "./selectInput";

startListenOptions();

document.addEventListener("click", (e) => {
  if (!e.target.matches(".select")) {
    unFocusedSelect();
  } else {
    focusedSelect();
  }
});

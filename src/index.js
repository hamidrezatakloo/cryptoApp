import "./sass/index.sass";
import {
  focusedSelect,
  unFocusedSelect,
  startListenOptions,
} from "./selectInput";

import { updateInfo, switchLoading } from "./getData";

const activeID = document.querySelector(".item.active").id;
updateInfo(activeID);

startListenOptions();

const checkBox = document.querySelector(".checkbox");

document.addEventListener("click", (e) => {
  if (e.target.matches(".options>.item")) {
    checkBox.classList.add("checked");
    switchLoading();
    updateInfo(e.target.id);
  }

  if (!e.target.matches(".select-input *")) {
    unFocusedSelect();
  } else {
    checkBox.classList.remove("checked");
    focusedSelect();
  }
});

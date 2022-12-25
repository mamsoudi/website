import "./styles.scss";
import { Observable } from "rxjs";

function onMouseMove({ clientX, clientY }: MouseEvent) {
  const curtain = document.querySelector(".curtain");

  if (curtain instanceof HTMLDivElement) {
    curtain.style.setProperty("--mouseX", clientX + "px");
    curtain.style.setProperty("--mouseY", clientY + "px");
  }
}

document.addEventListener("mouseenter", () => {
  document.addEventListener("mousemove", onMouseMove);
});

document.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", onMouseMove);
});

const slider = document.querySelector(".slider");

slider.addEventListener(
  "input",
  () =>
    (slider.style.background = `linear-gradient(90deg,
    var(--primary-color) ${slider.value}%,
    var(--slider-bg-color) ${slider.value}%`)
);

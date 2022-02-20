const sliders = document.querySelectorAll(".slider");

function sliderOperation() {
  const updatedColor = `linear-gradient(
      90deg,
      var(--primary-color) ${this.value}%,
      var(--slider-bg-color) ${this.value}%
  )`;

  this.style.background = updatedColor;
}

sliders.forEach(slider => {
  slider.addEventListener("input", sliderOperation);
});

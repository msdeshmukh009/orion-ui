const ratingForm = document.querySelector(".rating-form");
const ratingStarInputs = document.querySelectorAll(".rating-form .rating-star-input");
const ratingExampleShowRating = document.querySelector(".rating-number-div");

ratingStarInputs.forEach((starInput, starId) => {
  starInput.addEventListener("change", () => checkAllPreviousStars(starId));
});

const checkAllPreviousStars = id => {
  if (ratingStarInputs[id].checked) {
    for (let i = id; i >= 0; i--) {
      ratingStarInputs[i].checked = true;
    }
  } else {
    for (let i = id + 1; i < ratingStarInputs.length; i++) {
      ratingStarInputs[i].checked = false;
    }
  }
};

ratingForm.addEventListener("submit", e => {
  e.preventDefault();
  let sum = 0;
  ratingStarInputs.forEach(star => {
    if (star.checked) sum += 1;
  });
  ratingExampleShowRating.innerText = `You have submitted ${sum}/5 rating`;
});

const toasts = document.querySelectorAll(".toast");
const [sampleToast1, sampleToast2, sampleToast3, topRightToast, bottomCenterToast, bottomLeftToast] = toasts;

const toastDemoBtns = document.querySelectorAll(".toast-demo-btn");
const [topRightDemoBtn, bottomCenterDemoBtn, bottomLeftDemoBtn] = toastDemoBtns;

const tostCloseBtns = document.querySelectorAll(".toast-close-btn");
const [topRightCloseBtn, bottomCenterCloseBtn, bottomLeftCloseBtn] = tostCloseBtns;

topRightDemoBtn.addEventListener("click", () => {
  topRightToast.style.display = "flex";
  setTimeout(() => {
    topRightToast.style.display = "none";
  }, 3000);
});
bottomCenterDemoBtn.addEventListener("click", () => {
  bottomCenterToast.style.display = "flex";
  setTimeout(() => {
    bottomCenterToast.style.display = "none";
  }, 3000);
});
bottomLeftDemoBtn.addEventListener("click", () => {
  bottomLeftToast.style.display = "flex";
  setTimeout(() => {
    bottomLeftToast.style.display = "none";
  }, 3000);
});

topRightCloseBtn.addEventListener("click", () => {
  topRightToast.style.display = "none";
});
bottomCenterCloseBtn.addEventListener("click", () => {
  bottomCenterToast.style.display = "none";
});
bottomLeftCloseBtn.addEventListener("click", () => {
  bottomLeftToast.style.display = "none";
});

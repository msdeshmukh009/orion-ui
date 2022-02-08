const menuIconButton = document.querySelector("#menu-icon-button");
const sidebar = document.querySelector("#sidebar");
const main = document.querySelector("#doc-main-content");
const closeButton = document.querySelector("#close-btn");

menuIconButton.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  document.body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  document.body.style.overflow = "visible";
});

window.addEventListener("click", event => {
  if ((event.target === this.document.body || event.target === main) && this.innerWidth < 800) {
    sidebar.classList.remove("show-sidebar");
    document.body.style.overflow = "visible";
  }
});

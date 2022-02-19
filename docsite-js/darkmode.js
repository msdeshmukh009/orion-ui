let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeToggleIcon = document.querySelector("#dark-mode-toggle-icon");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  darkModeToggleIcon.classList.remove("fa-moon");
  darkModeToggleIcon.classList.add("fa-sun");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
  darkModeToggleIcon.classList.remove("fa-sun");
  darkModeToggleIcon.classList.add("fa-moon");
};

if (darkMode === null || darkMode === "disabled") darkModeToggleIcon.classList.add("fa-moon");
if (darkMode === "enabled") enableDarkMode();

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

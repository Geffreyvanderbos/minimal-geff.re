const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const currentTheme = storedTheme || (prefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);

document.querySelectorAll(".toggle-theme").forEach((toggle) => {
  const lightText = toggle.textContent;
  const darkText = toggle.dataset.darkText;

  toggle.setAttribute("data-light-text", lightText);

  toggle.textContent = currentTheme === "dark" ? darkText : lightText;

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    document.querySelectorAll(".toggle-theme").forEach((t) => {
      const tLightText = t.getAttribute("data-light-text");
      t.textContent = newTheme === "dark" ? t.dataset.darkText : tLightText;
    });
  });
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      document.querySelectorAll(".toggle-theme").forEach((t) => {
        const tLightText = t.getAttribute("data-light-text");
        t.textContent = newTheme === "dark" ? t.dataset.darkText : tLightText;
      });
    }
  });

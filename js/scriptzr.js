const init = () => {
  const icon_open = document.querySelector(".icon-open");
  const icon_close = document.querySelector(".icon-close");
  const menu = document.querySelector(".menu");
  icon_open.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
  icon_close.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
};

document.addEventListener("DOMContentLoaded", init);

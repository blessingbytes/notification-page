let mark = document.getElementById("mark");

mark.addEventListener("click", () => {
  document.querySelectorAll(".single-box").forEach((e) => {
    e.classList.remove("unseen");
  });

  document.querySelectorAll(".dot").forEach((e) => {
    e.classList.remove("dot");
  });

  document.getElementById("num").innerText = "0";
});

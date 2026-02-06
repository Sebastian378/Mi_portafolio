if ("ontouchstart" in window) {
  const book = document.querySelector(".book1");
  book.addEventListener("click", () => {
    book.classList.toggle("open");
  });
}
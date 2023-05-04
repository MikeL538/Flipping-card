const flipBtn = document.querySelector(".div-button");
const cardContainer = document.querySelector(".container");

flipBtn.addEventListener("click", function () {
  if (cardContainer.classList.contains("flip")) {
    cardContainer.classList.remove("flip");
    cardContainer.classList.add("flip-back");
  } else if (cardContainer.classList.contains("flip-back")) {
    cardContainer.classList.remove("flip-back");
    cardContainer.classList.add("flip");
  } else {
    cardContainer.classList.add("flip");
  }
});

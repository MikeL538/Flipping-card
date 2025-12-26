const cardContainer = document.querySelector(".container");
const vanish = document.querySelectorAll(".vanish");

cardContainer.addEventListener("click", function () {
  cardContainer.style.pointerEvents = "none";

  if (cardContainer.classList.contains("flip")) {
    cardContainer.classList.remove("flip");
    cardContainer.classList.add("flip-back");
  } else if (cardContainer.classList.contains("flip-back")) {
    cardContainer.classList.remove("flip-back");
    cardContainer.classList.add("flip");
  } else {
    cardContainer.classList.add("flip");
  }

  if (cardContainer.classList.contains("flip")) {
    vanish.forEach((element, index) => {
      element.classList.add("disappear");
      element.classList.remove("appear");
    });
  }

  if (cardContainer.classList.contains("flip-back")) {
    vanish.forEach((element, index) => {
      element.classList.remove("disappear");
      element.classList.add("appear");
    });
  }

  setTimeout(() => {
    cardContainer.style.pointerEvents = "all";
  }, 900);
});

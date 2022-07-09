const rateStart = document.querySelector(".rating-state");
const thankYou = document.querySelector(".thank-you");
const form = document.querySelector(".rating-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selector = "input[name=ratings]:checked";
  const checked = document.querySelector(selector);

  if (checked !== null) {
    const selectedRating = document.querySelector(".selection");
    selectedRating.textContent =
      "You selected " + checked.getAttribute("value") + " out of 5";
    rateStart.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});

let selectedRating = 0;

const init = () => {
  const ratingNumbers = document.getElementById("rating-container");
  ratingNumbers.addEventListener("click", event => {
    event.preventDefault();
    const allRatings = document.querySelectorAll(".rounded-number");
    allRatings.forEach(element => {
      element.classList.remove("rounded-number-selected");
    });
    if (event.target.classList == "rounded-number") {
      selectedRating = event.target.innerText;
      event.target.classList.add("rounded-number-selected");
    }
  });
};

const onSubmitClick = () => {
  const ratingView = document.getElementById("rating-ui");
  const thankView = document.getElementById("thank-ui");
  const ratingValue = document.getElementById("rating-value");
  ratingValue.innerHTML = selectedRating;
  ratingView.classList.remove("show");
  ratingView.classList.add("hide");
  thankView.classList.remove("hide");
  thankView.classList.add("show");
};

window.addEventListener("load", () => init());

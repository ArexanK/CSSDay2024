function showSpeakers(year) {
  const slideButton = document.querySelector(".slide" + year);
  slideButton.click();

  // Hide all years' speakers
  const allYears = document.querySelectorAll(".year");
  allYears.forEach((yearElement) => {
    yearElement.classList.remove("show");
  });

  // Show speakers for the selected year
  const selectedYear = document.getElementById("year-" + year);
  if (selectedYear) {
    selectedYear.classList.add("show");
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".slide");

//   slides.forEach((slide) => {
//     slide.addEventListener("click", function () {
//       console.log(selectedYear);
//       const selectedYear = this.dataset.year;

//       // Hide all speakers containers
//       const speakersContainers = document.querySelectorAll(
//         ".speakers-container"
//       );
//       speakersContainers.forEach((container) => {
//         container.style.display = "none";
//       });

//       // Show speakers container for the selected year
//       const selectedSpeakersContainer = document.querySelector(
//         `#year-${selectedYear} .speakers-container`
//       );
//       selectedSpeakersContainer.style.display = "block";
//     });
//   });
// });

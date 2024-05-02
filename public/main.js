function showSpeakers(year) {
  // Simulate press effect
  const slideButton = document.getElementById("slide-" + year);
  slideButton.classList.add("pressed");
  setTimeout(() => {
    slideButton.classList.remove("pressed");
  }, 100);

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

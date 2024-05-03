function showSpeakers(year) {
  // Hide all years
  const years = document.querySelectorAll(".year");
  years.forEach((y) => y.classList.remove("show"));

  // Show the selected year
  const selectedYear = document.getElementById("year-" + year);
  selectedYear.classList.add("show");
}

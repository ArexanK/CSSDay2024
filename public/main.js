function showSpeakers(year) {
  // Hide all years
  const years = document.querySelectorAll(".year");
  years.forEach((y) => y.classList.remove("show"));

  // Show the selected year
  const selectedYear = document.getElementById("year-" + year);
  selectedYear.classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = document.querySelectorAll(".speaker-search");

  searchInputs.forEach(function (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const yearContainer = searchInput.closest(".year");
      const speakerCards = yearContainer.querySelectorAll(".speaker-card");

      speakerCards.forEach(function (card) {
        const speakerName = card
          .querySelector(".speaker-name")
          .innerText.toLowerCase();

        if (speakerName.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeModalBtn = modal.querySelector(".close");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

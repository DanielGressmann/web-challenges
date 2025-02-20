console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

// PART 1
// function renderStars(filledStars) {
//   // Reset the star container before re-rendering stars - damit sich Sterne nicht doppeln
//   starContainer.innerHTML = "";

//   // --v-- write or modify code below this line --v--
//   for (let i = 1; i <= 5; i++) {
//     // for-Loop erstellen; i ist eine Zählervariable (Iterator)
//     const star = document.createElement("img"); // Erstellt neues Bild
//     star.src = "assets/star-empty.svg"; // Quelle des Bildes
//     starContainer.append(star); // Stern dem Container zufügen
//   }
//   // --^-- write or modify code above this line --^--
// }

// renderStars();

// PART 2
function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");

    if (i <= filledStars) {
      // wenn i kleiner oder gleich filledStars ist…
      star.src = "assets/star-filled.svg"; // zeige die src "star-filled"
    } else {
      star.src = "assets/star-empty.svg"; // sonst nimm diese Quelle nehmen
    }
    star.addEventListener("click", () => {
      // PART 3: füge der Variablen Star ein click-Event hinzu
      renderStars(i); // Zeige beim klicken
    });
    starContainer.append(star);
  }
  // --^-- write or modify code above this line --^--
}

renderStars(5);

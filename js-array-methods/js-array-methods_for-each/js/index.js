const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// TASK 1
colors.forEach((color) => {
  // 1a. Neues div-Element erstellen
  const coloredBox = document.createElement("div");

  // 1b. die Klasse color-box hinzufügen
  coloredBox.classList.add("color-box");

  // 2. Die Hintergrundfarbe setzen
  coloredBox.style.backgroundColor = color;

  // 3. coloredBox-Element zum Body hinzufügen
  document.body.append(coloredBox);

  // 3.1 Altenative:
  // Erst const body = document.body; definieren,
  // dann geht auch body.append(coloredBox);
});

// TASK 2

// 1. Funktion zum erstellen einer farbigen Box
function renderColorBox(color) {
  const coloredBox = document.createElement("div");
  coloredBox.classList.add("color-box");
  coloredBox.style.backgroundColor = color;
  document.body.append(coloredBox);
}

// forEach mit Funktionsreferenz benutzen - ist einfacher als Arrow-Funktion ((color) => {})
colors.forEach(renderColorBox);

console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const data = await fetch(url); // Daten abrufen
  const dataObject = await data.json(); // In JSON umwandeln

  console.log("All Data", dataObject.results[2].eye_color);
}

fetchData();

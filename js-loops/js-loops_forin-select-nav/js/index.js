console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  NN: "bitte wählen",
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (const code in languages) {
  // Iterieren durch das Objekt "languages"
  const option = document.createElement("option");
  option.value = code; // Wert der Option (z.B. DE oder EN)
  option.textContent = languages[code]; // Text der Option (z.B. "German")
  select.appendChild(option);
}
// Option zum Select-Element hinzufügen
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

// //iterieren durch Objekt und erstellen von Listenelementen und Links
for (const key in nav) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  // a.setAttribute("href", nav[key].href); funktioniert wie Zeile 58 sagt CHAT GPT
  a.href = nav[key].href;
  a.textContent = nav[key].text;

  li.append(a);
  ul.append(li);
  // }
  // // --^-- write or modify code above this line --^--

  // CHAT GPT LÖSUNG Navigationselemente hinzufügen
  // for (const key in nav) {
  //   const li = document.createElement("li");
  //   const a = document.createElement("a");

  //   a.href = nav[key].href;
  //   a.textContent = nav[key].text;

  //   li.appendChild(a);
  //   ul.appendChild(li);
}

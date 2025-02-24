console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    // if (!response.ok) {
    //   // implement logical NOT-OPERATOR "!"
    //   throw new Error(`Error Status Code: ${response.status}`);
    // }

    // // Bonusaufgabe: Überprüfen auf falschen Content-Type
    // if (!contentType.includes("json")) {
    //   // If content does not include a json file…
    //   throw new Error(`Expected JSON: ${contentType}`); // throw this error message
    // }

    // Part 1 and Bonuspart combined:

    if (!response.ok) {
      throw new Error(`Error Status Code: ${response.status}`);
    } else if (!contentType.includes("json")) {
      throw new Error(`Expected JSON: ${contentType}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});

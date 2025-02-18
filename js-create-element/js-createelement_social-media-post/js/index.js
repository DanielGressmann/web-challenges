console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const h1 = document.querySelector("h1");
const h1Clone = h1.cloneNode(true);
const article = document.querySelector("article");
const post = document.querySelector("post");
const footer = document.querySelector("footer");
const button = document.querySelector("button");

console.log(`h1: ${h1.textContent} und article ${article}`);
console.log("article: ", article);

document.body.appendChild(h1Clone);
// Exercise:
// Use document.createElement() and append another social media post to the body.

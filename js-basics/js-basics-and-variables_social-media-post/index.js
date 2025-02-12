console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--

const title = "HSV steigt eindlich auf";
const content =
  "Kein verflixtes 7. Jahr! Der von den Fans lang ersehnte Aufstieg ist den Hamburgern endlich gelungen. In der kommenden Saison können sich die Fans nun auf Derbys gegen Stadt-Rivalen St. Pauli oder Werder Bremen freuen.";
let likes = 7000;
likes++;
const user = "Daniel G.";
const isReported = false; // Der Beitrag wurde nicht reported

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--

console.log("Titel: ", title);
console.log("Post Inhalt: ", content);
console.log("Likes: ", likes);
console.log("User: ", user);
console.log("Wurde der Beitrag reported? ", isReported);

// --^-- write your code here --^--

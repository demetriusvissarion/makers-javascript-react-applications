// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

console.log('Hello from the developer console!');
console.log(new Date());
// console.log(alert('Hey there!'));

const headingElement = document.querySelector("h1");
headingElement.textContent = "Ola";

const body = document.querySelector("body");

function addRecipeToPage(title, steps) {
    const recipeTitle = document.createElement("p");
    recipeTitle.innerText = `${title}: `;

    const recipeListEl = document.createElement("ol");

    const stepsElements = steps.map(step => {
        const stepEl = document.createElement("li");
        stepEl.innerText = step;
        return stepEl;
    });

    recipeListEl.append(...stepsElements);

    document.body.appendChild(recipeTitle);
    document.body.appendChild(recipeListEl);
}

// Example usage:
const recipe1 = {
name: 'Buttered toast recipe',
steps: ['Toast some bread', 'Spread butter on the toast']
};

const recipe2 = {
name: 'Banana and cherry smoothie recipe',
steps: ['Peel the banana', 'Remove cherry pits', 'Blend and enjoy']
};

// addRecipeToPage(recipe1.name, recipe1.steps);
// addRecipeToPage(recipe2.name, recipe2.steps);

const URL = "https://official-joke-api.appspot.com/random_joke";

const getJoke = async () => {
    const response = await fetch(URL);
    const joke = await response.json();
    console.log(joke);

    const jokeOfTheDayTitle = document.createElement("h3");
    jokeOfTheDayTitle.innerText = `Joke of the day`;
    document.body.appendChild(jokeOfTheDayTitle);

    const jokeOfTheDayContent = document.createElement("p");
    jokeOfTheDayContent.innerText = `Type: ${joke.type}`;
    document.body.appendChild(jokeOfTheDayContent);

    const jokeOfTheDaySetup = document.createElement("p");
    jokeOfTheDaySetup.innerText = `Setup: ${joke.setup}`;
    document.body.appendChild(jokeOfTheDaySetup);

    const jokeOfTheDayPunchline = document.createElement("p");
    jokeOfTheDayPunchline.innerText = `Punchline: ${joke.punchline}`;
    jokeOfTheDayPunchline.style.display = "none"; // Hide punchline by default
    document.body.appendChild(jokeOfTheDayPunchline);

    // Add event listener to the show button
    const showButton = document.getElementById("showButton");
    showButton.addEventListener("click", function () {
        // Toggle the visibility of the punchline
        jokeOfTheDayPunchline.style.display = (jokeOfTheDayPunchline.style.display === "none") ? "block" : "none";
    });
};

// Call the getJoke function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', getJoke);


document.addEventListener('DOMContentLoaded', function () {
    const loadDataButton = document.getElementById('loadDataButton');
    const loadedDataParagraph = document.getElementById('loadedData');
    loadDataButton.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                loadedDataParagraph.innerText = `Loaded Data: ${JSON.stringify(data)}`;
            })
            .catch(error => {
                console.error('Error during fetch:', error);
            });
    });
});


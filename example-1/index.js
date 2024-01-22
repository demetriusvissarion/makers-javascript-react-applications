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

addRecipeToPage(recipe1.name, recipe1.steps);
addRecipeToPage(recipe2.name, recipe2.steps);
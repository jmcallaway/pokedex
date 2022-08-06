// ✅ What is the DOM?

// Chrome Dev Tools

// ✅ Creating / Reading DOM Elements

// .createElement() => creates one DOM element

// .querySelector() => returns the first matching DOM element

// .querySelectorAll() => returns an array-like collection of matching DOM elements

// .getElementById() => returns the DOM element with matching Id

// .getElementsByClassName() => returns an array-like collection of DOM elements with matching Class

// .getElementsByTagName() => when is this especially useful?

// ✅ Updating / Deleting DOM Elements

// .append

// .remove()

// ✅ .innerHTML vs. .innerText vs. .textContent

// let firstDiv = document.getElementById('lecture-goals');

// .innerHTML => if you want to insert HTML within a DOM element, pure HTML

// let anotherElement = document.createElement("h1");

// firstDiv.append(anotherElement);

// firstDiv.innerHTML = "<h1>Hey!</h1>"

// console.log(firstDiv.innerHTML);

// .innerText => if you only want to insert text, includes only human-readable elements

// firstDiv.innerText = "Hey!";

// console.log(firstDiv.innerText);

// .textContent => if you only want to insert text, includes formatting of elements

// firstDiv.textContent = "Hey!";

// console.log(firstDiv.textContent);

// -------------------------------------------

console.log('------------------------');
console.log('⬇️ Break Out Activities ⬇️');
console.log('🚨 Comment Out Lecture Code Above Before Starting 🚨');
console.log('💡 Use console.log() To Check Answers 💡');
console.log('------------------------');

// 🚧 Break Out Activity 1: Creating / Reading / Updating DOM Elements

// 🚨 Comment out any conflicting code above before proceeding.

// array of pokemon objects
const pokemon = [
	{
		id: 1,
		name: 'Bulbasaur',
		img: './images/bulbasaur.png',
		likes: 4,
	},
	{
		id: 2,
		name: 'Ivysaur',
		img: './images/ivysaur.png',
		likes: 21,
	},
	{
		id: 3,
		name: 'Venusaur',
		img: './images/venasaur.png',
		likes: 7,
	},
	{
		id: 4,
		name: 'Charmander',
		img: './images/charmander.png',
		likes: 20,
	},
	{
		id: 5,
		name: 'Charmeleon',
		img: './images/charmeleon.png',
		likes: 11,
	},
];

// container to store DOM element with ID of "poke-container" => <div id="poke-container"></div>
const pokeContainer = document.getElementById('poke-container');
console.log('hi there!');
// 1️⃣ Given "pokemon" and "pokeContainer" above, create a function (renderPokemon) that:

//  ✔️ Accepts a single "pokemon" object

//  ✔️ Creates a "div" element to contain information about each Pokemon and stores the "div" in a variable (pokeCard)
//	Assign pokeCard a unique ID with the Pokemon's "id" prepended by "poke-" (i.e., "poke-1" for Bulbasaur)
//	Assign pokeCard a className of "poke-card"

//  ✔️ Creates an "img" element for each Pokemon and stores the "img" in a variable (pokeImg)
//	Assign pokeImg a source (src) linking to the Pokemon's image
// 	Assign pokeImg a unique alt with the Pokemon's name followed by " image" (i.e., "bulbasaur image")

//	✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeName)
// 	Use textContent() to fill in the heading with the Pokemon's name

//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
// 	Use append() as necessary

// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.

// ✅ Check Answer:
// function init() {
// 	pokemon.forEach(renderPokemon);
// }

// init();

// 🚧 Break Out Activity 2: Creating / Reading / Updating Elements

// 🚨 Comment out any conflicting code above before proceeding.

// 1️⃣ Add the following capabilities to renderPokemon:

function renderPokemon(pokemon) {
	const pokeCard = document.createElement('div');
	const pokeImg = document.createElement('img');
	const pokeName = document.createElement('h3');
	const pokeLikes = document.createElement('h3');
	const likesNum = document.createElement('h5');
	const likesBttn = document.createElement('button');
	const deleteBttn = document.createElement('button');

	pokeCard.id = `poke-${pokemon.id}`;
	pokeCard.className = 'poke-card';
	pokeImg.src = pokemon.img;
	pokeImg.alt = pokemon.name + ' image';
	pokeName.textContent = pokemon.name;
	pokeLikes.textContent = 'Likes: ';
	likesNum.className = 'likes-num';
	likesNum.textContent = pokemon.likes;
	likesBttn.className = 'likes-bttn';
	likesBttn.textContent = '♥';
	deleteBttn.className = 'delete-bttn';
	deleteBttn.textContent = 'Delete';

	pokeCard.append(
		pokeImg,
		pokeName,
		pokeLikes,
		likesNum,
		likesBttn,
		deleteBttn
	);
	pokeContainer.append(pokeCard);
}

//  ✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeLikes)
// 	Use textContent() to fill in the heading with "Likes: "

//  ✔️ Creates an "h5" element for each Pokemon and stores the element in a variable (likesNum)
// 	Assign likesNum a className of "likes-num"
// 	Use textContent() to fill in the heading with the Pokemon's number of likes

//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (likesBttn)
// 	Assign likesBttn a className of "likes-bttn"
// 	Use textContent() to fill in the button with a label, "♥"

//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (deleteBttn)
// 	Assign deleteBttn a className of "delete-bttn"
// 	Use textContent() to fill in the button with a label, "Delete"

//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
// 	Use append() as necessary

// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.

// ✅ Check Answer:
function init() {
	pokemon.forEach(renderPokemon);
}

init();

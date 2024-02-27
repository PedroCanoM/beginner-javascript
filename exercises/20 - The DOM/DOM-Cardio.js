// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const myHTML = `
 <li>One</li>
<li>Two</li>
<li>Three</li>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);

ul.appendChild(myFragment);

div.appendChild(ul);

// create an image

const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(img);


// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML2 = `
<div>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>
`;

const myFragment2 = document.createRange().createContextualFragment(myHTML2);

div.insertBefore(myFragment2, ul);

// add a class to the second paragraph called warning
// remove the first paragraph
const p1 = div.querySelector('p');
p1.remove();
const p2 = div.querySelector('p');
p2.classList.add('warning');


// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
    </div>
    `;
  }

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardHTML1 = generatePlayerCard('wes', 12, 150);
let cardHTML2 = generatePlayerCard('scott', 13, 160);
let cardHTML3 = generatePlayerCard('james', 14, 170);
let cardHTML4 = generatePlayerCard('jim', 15, 180);

// append those cards to the div
cards.innerHTML = cardHTML1 + cardHTML2 + cardHTML3 + cardHTML4;
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('.delete');
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
  }
  
buttons.forEach(button => button.addEventListener('click', deleteCard));

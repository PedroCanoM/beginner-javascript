const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p!';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);


const myUnorderedList = document.createElement('ul');

const myListItem = document.createElement('li');
myListItem.textContent = 'three';
myUnorderedList.appendChild(myListItem);


let strings1 = ['two', 'one'];
for (let s of strings1) {
    const myListItem1 = myListItem.cloneNode(true);
    myListItem1.textContent = s;
    myUnorderedList.insertAdjacentElement('afterbegin', myListItem1);
}
let strings2 = ['four', 'five'];
for (let s of strings2) {
    const myListItem1 = myListItem.cloneNode(true);
    myListItem1.textContent = s;
    myUnorderedList.insertAdjacentElement('beforeend', myListItem1);
}

document.body.appendChild(myUnorderedList);



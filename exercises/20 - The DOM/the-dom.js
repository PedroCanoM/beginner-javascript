// const p = document.querySelector("p");
// const divs = document.querySelectorAll("div");
// console.log(p);
// console.log(divs);

// const heading = document.querySelector("h2");

// // heading.textContent = "Wes is cool";   
// // console.dir(heading);
// // console.dir(heading.textContent);
// // console.dir(heading.innerText);
// console.dir(heading.innerHTML);
// console.dir(heading.outerHTML);



// const pizzaList = document.querySelector('.pizza');
// // console.log(pizzaList.textContent);


// pizzaList.insertAdjacentText('beforeend','🍕');


const pic = document.querySelector('.nice');
console.log(pic.classList)
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');

function toggleRound(){
    pic.classList.toggle('round');
  }
pic.addEventListener('click', toggleRound);

pic.alt = "cute pup";
console.log(pic.alt);
console.log(pic.naturalWidth);



  pic.addEventListener('load', function(){
    console.log(pic.naturalWidth);
  });

console.log(pic.getAttribute('alt'));

pic.setAttribute('alt', 'REALLY CUTE PUP');

console.log(pic.getAttribute('alt'));

console.log(pic.hasAttribute('alt'));

const custom = document.querySelector('.custom');
custom.addEventListener('click', function(){
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
  });



  
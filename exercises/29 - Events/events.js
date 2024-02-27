// const butts = document.querySelector('.butts');
// function handleClick() {
//     console.log('IT GOT CLICKED!!!!!!!!');
//   }
// butts.addEventListener('click', handleClick);
// butts.removeEventListener('click', handleClick);

// const coolButton = document.querySelector('.cool');
// coolButton.addEventListener('click', handleClick);



const buyButtons = document.querySelectorAll('button.buy');

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
  });

function handleBuyButtonClick(event) {
    console.log('You are buying it');
    // console.log(parseFloat(event.target.dataset.price));
    // event.stopPropagation();
    const button = event.target;
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
  }


  window.addEventListener("click", function(event) {
    event.stopPropagation();
    // console.log("you clicked the window");
    // console.log(event.target);
    // console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);

// const photoEl = document.querySelector(".photo");
// photoEl.addEventListener("mousemove", function(e) {
//     console.log(this);
//     console.count(e.currentTarget);
// });
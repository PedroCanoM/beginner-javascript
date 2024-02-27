const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');


const cardButtons = document.querySelectorAll('.card button');
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))

function handleCardButtonClick(event) {
    console.log('YA CLICKED IT');
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description
    const name = card.querySelector('h2').textContent;

    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      '200',
      '600'
    )}" alt="${name}" />
    <p>${desc}</p>
  `;
    // show the modal
    modalOuter.classList.add('open');

  }

function closeModal() {
    modalOuter.classList.remove('open');
}

window.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === 'Escape') {
      closeModal();
    }
  });
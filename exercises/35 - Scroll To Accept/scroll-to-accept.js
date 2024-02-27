const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

const watch = document.querySelector('.watch');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        console.log('REMOVING DISABLED');
        ob.unobserve(terms.lastElementChild);
    }
  }

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});
ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(e) {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
//   });
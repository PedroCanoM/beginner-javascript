// const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0});

const age = 50;
const a = (function (age) {
    console.log("Running the Anon function");
    return `Your are cool and ${age}`;
  })(age);

  const wes = {
    name: 'Westopher Bos',
    // Method!
    sayHi: function sayHi() {
      console.log(`Hey ${this.name}`);
      console.log('Hey Wes!');
      return 'Hey Wes!';
    },
    // Short hand Method
    yellHi() {
      console.log('HEY WESSSSS');
    },
    // Arrow function
    whisperHi: () => {
       console.log('hiii wess im a mouse');
    }
  };

  const button = document.querySelector(".clickMe");
//   handler
  button.addEventListener("click", wes.sayHi);


  setTimeout(wes.yellHi, 1000);
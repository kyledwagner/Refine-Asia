const leftPad = require('left-pad'); // Require left pad
const output = leftPad('Hello, World!', 15); // Define output

// Send output to the console
console.log(output);

let person = {
  name: 'Yoda',
  designation: 'Jedi Master ',
};

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    console.log('No need! already trained');
  }
  console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({ name: 'Adeel', designation: 'padawan' });

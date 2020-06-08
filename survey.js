/* eslint-disable */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = [];
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  // TODO: Log the answer in a database
  answers.push(answer);
  question2();
});
const question2 = function () {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    answers.push(answer2);
    question3();
  });
}
const question3 = () => {
  rl.question('What do you listen to while doing that?', (answer) => {
    answers.push(answer)
    question4();
  })
}
const question4 = () => {
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
    answers.push(answer)
    question5();
  })
}
const question5 = () => {
  rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
    answers.push(answer)
    question6();
  })
}
const question6 = () => {
  rl.question('Which sport is your absolute favourite?', (answer) => {
    answers.push(answer)
    question7();
  })
}
const question7 = () => {
  rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
    answers.push(answer)
    console.log(`Thank you for your valuable feedback: ${answers[0]}`);
    const profileMessage = `
    ${answers[0]} likes to listing to ${answers[2]} while ${answers[1]}. He loves eating ${answers[4]} at ${answers[3]}. 
    His favorite sport is ${answers[5]}. His superpower is ${answers[6]}
    `;
    console.log(profileMessage);
    rl.close();
  })
}

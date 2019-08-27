const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

function createProfile(cb) {
 let person = {
   name: "",
   activity: "",
   music: "",
   meal: "",
   sport: "",
   superpower: "",
 }

rl.question('What is your name? ', (answer) => {
 rl.question('What activity do you like doing? ', (answer1) => {
   rl.question('What do you like listening to? ', (answer2) => {
     rl.question('What is your favourite meal? ', (answer3) => {
       rl.question('What sport do you like? ', (answer4) => {
         rl.question('What is your superpower? ', (answer5) => {
           person.name = answer
           person.activity = answer1
           person.music = answer2
           person.meal = answer3
           person.sport = answer4
           person.superpower = answer5
           rl.close();
           cb(person);
         });
       });
     });
   });
 });
})
}



createProfile(function(data) {
 let string = `${data.name}'s favourite activity is ${data.activity} while they listen to ${data.music}, eating ${data.meal} and playing ${data.sport} wishing they could ${data.superpower}`
 console.log(string)
});
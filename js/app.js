'use strict';

let score = 0;

let UserName = prompt('Hello' + '\n' + 'Enter your name please ?');
console.log(UserName);

function myHome () {
let MyCity = prompt('Do I Live In Amman ?' + '\n' + 'y / n');
console.log(MyCity);
MyCity = MyCity.toLowerCase();

if (MyCity === 'y') {

  alert('Correct Answer');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I Live In Amman' );
}
}
myHome ();

function myWork () {
let MyField = prompt('Am I a Mechanical Engineer ?' + '\n' + 'y / n');
console.log(MyField);
MyField = MyField.toLowerCase();

if (MyField === 'n') {

  alert('Correct Answer' + '\n' + 'I am a Mechatronics Engineer');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I am a Mechatronics Engineer');
}
}
myWork ();

function myRel () {
let MyStatus = prompt('Do I Still Single ?' + '\n' + 'y / n');
console.log(MyStatus);
MyStatus = MyStatus.toLowerCase();

if (MyStatus === 'n') {

  alert('Correct Answer' + '\n' + 'I am Married');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I am Married');
}
}
myRel ();


function family (){

let MyFamily = prompt('Do I Have Children ?' + '\n' + 'y / n');
console.log(MyFamily);
MyFamily = MyFamily.toLowerCase();

if (MyFamily === 'y') {

  alert('Correct Answer' + '\n' + 'I Have One Daughter');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I Have One Daughter');
}
}
family ();


function fav (){
let MyFav = prompt('Am I Fans Of Anime ?' + '\n' + 'y / n');
console.log(MyFav);
MyFav = MyFav.toLowerCase();

if (MyFav === 'y') {

  alert('Correct Answer' + '\n' + 'I am a Big Fans of Anime');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I am a Big Fans of Anime');
}
}
fav ();

function guess1 (){
for (let i = 0; i < 4; i++) {
  let UserNum = prompt('Guess The Correct Number ? (1 - 10)' + '\n' + 'You Have ' + (4-i) + ' Attempts');
  UserNum = Number(UserNum);
  if (UserNum === 6) {
    alert('Correct, Move On');
    score++;
    break;
  }else if (UserNum > 6){
    alert('High, Try Lower');
  }else if (UserNum < 6){
    alert('Low, Try Higher');
  }
  if(i === 3){
    alert('No More Try, The Correct Number Is 6');
  }
}
}
guess1 ();


function guess2 () {
let FavColor = ['black', 'green', 'blue'];

Try : for (let a = 0; a < 6; a++) {
  let Attempts = 6-a;
  Attempts = Attempts.toString();
  let UserColor = prompt('Guess One Of My Favorite Colors ? ' + '\n' + 'You Have ' + Attempts + ' Attempts');
  UserColor = UserColor.toLowerCase();
    for (let z = 0; z < FavColor.length; z++){
      if (UserColor === FavColor[z]){
      alert('Correct, This Is One Of Them');
      score++;
      break Try;
      } else {
       alert('Wrong, Try Another');
    }
  }
  if (a=== 5 ){
    alert ('no more trials,sorry!');
  }
}
alert('My Favorite Colors Are Black, Green And Blue');
}
guess2 ();
alert('Welcome ' + UserName +' your score is '+ score + '\n' + 'Enjoy your journey');

'use strict';

let score = 0;

let UserName = prompt('Hello' + '\n' + 'Enter your name please ?');
console.log(UserName);


let MyCity = prompt('Do I Live In Amman ?' + '\n' + 'y / n');
console.log(MyCity);
MyCity = MyCity.toLowerCase();

if (MyCity === 'y') {

  alert('Correct Answer');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I Live In Amman' );
}

let MyField = prompt('Am I a Mechanical Engineer ?' + '\n' + 'y / n');
console.log(MyField);
MyField = MyField.toLowerCase();

if (MyField === 'n') {

  alert('Correct Answer' + '\n' + 'I am a Mechatronics Engineer');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I am a Mechatronics Engineer');
}

let MyStatus = prompt('Do I Still Single ?' + '\n' + 'y / n');
console.log(MyStatus);
MyStatus = MyStatus.toLowerCase();

if (MyStatus === 'n') {

  alert('Correct Answer' + '\n' + 'I am Married');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I am Married');
}

let MyFamily = prompt('Do I Have Children ?' + '\n' + 'y / n');
console.log(MyFamily);
MyFamily = MyFamily.toLowerCase();

if (MyFamily === 'y') {

  alert('Correct Answer' + '\n' + 'I Have One Daughter');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I Have One Daughter');
}

let MyFav = prompt('Am I Fans Of Anime ?' + '\n' + 'y / n');
console.log(MyFav);
MyFav = MyFav.toLowerCase();

if (MyFav === 'y') {

  alert('Correct Answer' + '\n' + 'I am a Big Fans of Anime');
  score++;
} else {
  alert('Wrong Answer' + '\n' + 'I am a Big Fans of Anime');
}


for (let i = 0; i < 4; i++) {
  let UserNum = prompt('Guess The Correct Number ? (1 - 10)' + '\n' + 'You Have ' + (4-i) + ' Attempts');
  UserNum = Number(UserNum);
  if (UserNum === 6) {
    alert('Correct, Move On');
    score++;
    break;
  }else if (UserNum > 6){
    alert('Higher Number, Try Again');
  }else if (UserNum < 6){
    alert('Lower Number, Try Again');
  }
  if(i === 3){
    alert('No More Try, The Correct Number Is 6');
  }
}



let FavColor = ['black', 'green', 'blue'];
for (let a = 0; a < 6; a++) {
  let Attempts = 6-a;
  Attempts = Attempts.toString();
  let UserColor = prompt('Guess One Of My Favorite Colors ? ' + '\n' + 'You Have ' + Attempts + ' Attempts');
  UserColor = UserColor.toLowerCase();
  if (UserColor === FavColor[0] || UserColor === FavColor[1] || UserColor === FavColor[2]){
    alert('Correct, This Is One Of Them');
    score++;
    break;
  } else {
    alert('Wrong, Try Another');
  }
}

alert('My Favorite Colors Are Black, Green And Blue');

alert('Welcome ' + UserName +' your score is '+ score + '\n' + 'Enjoy your journey');





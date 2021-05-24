'use strict'

let UserName = prompt('Hello' + '\n' + 'Enter your name please ?');
console.log(UserName);


let  MyCity = prompt('Do I Live In Amman ?' + '\n' + 'y / n');
console.log(MyCity);
MyCity = MyCity.toLowerCase();

if (MyCity === 'y') {

    alert('Correct Answer')
    
} else {
    alert('Wrong Answer' + '\n' + 'I Live In Amman' )
}

let MyField = prompt('Am I a Mechanical Engineer ?' + '\n' + 'y / n');
console.log(MyField);
MyField = MyField.toLowerCase();

if (MyField === 'n') {

    alert('Correct Answer' + '\n' + 'I am a Mechatronics Engineer')
    
} else {
    alert('Wrong Answer' + '\n' +  'I am a Mechatronics Engineer')
}

let MyStatus = prompt('Do I Still Single ?' + '\n' + 'y / n');
console.log(MyStatus);
MyStatus = MyStatus.toLowerCase();

if (MyStatus === 'n') {

    alert('Correct Answer' + '\n' + 'I am Married')
    
} else {
    alert('Wrong Answer' + '\n' + 'I am Married')
}

let MyFamily = prompt('Do I Have Children ?' + '\n' + 'y / n');
console.log(MyFamily);
MyFamily = MyFamily.toLowerCase();

if (MyFamily === 'y') {

    alert('Correct Answer' + '\n' + 'I Have One Daughter')
    
} else {
    alert('Wrong Answer' + '\n' + 'I Have One Daughter')
}

let MyFav = prompt('Am I Fans Of Anime ?' + '\n' + 'y / n');
console.log(MyFav);
MyFav = MyFav.toLowerCase();

if (MyFav === 'y') {

    alert('Correct Answer'  + '\n' + 'I am a Big Fans of Anime')
    
} else {
    alert('Wrong Answer'  + '\n' + 'I am a Big Fans of Anime')
}

alert('GREAT ' + UserName + '\n' + 'Welcome To My World');




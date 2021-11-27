/*1)Создать репозиторий на гит хабе
* 2) html/css/.gitignore => запушить
* 3) Банковская карта. Создать программу которая отрисует\добавить новую банковскую карту т.е. при нажатии на кнопку
*
* 3.1) Сверстать карточку
*
* 4) js. В неё добавляется 16цифр разбитые по 4шт (сделай это регулярные выражения) каждая цифра это рандомное число от 0-9
* 5) В нижнем правом углу карточки - имя пользователя (либо promt либо рандомить с массива)
* 6) Создать массив платежных систем и рандомно подставлять систему в карточку (создать див с классом (visa/mc) добавлять соответскующий класс в зависимости от рандома и иконку).
*
* */
const getRandom = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let number = [];
let c = 16;
let str = "";
let zero = " ";
while(c--) {
    str += getRandom();
    if (c % 4 === 0){
        number.push(str);
        str = "";
    }
}
console.log(number);





let main = document.body.childNodes[1];
function addBox() {
    main.innerHTML += `<div class="box"><div class="numberCard">${number}</div><div class="user">Ivanov Ivan Ivanovich</div><div class="icon"></div></div>`;
}

/*1)Создать репозиторий на гит хабе
* 2) html/css/.gitignore => запушить
* 3) Банковская карта. Создать программу которая отрисует\добавить новую банковскую карту т.е. при нажатии на кнопку
*
* 3.1) Сверстать карточку
*
* 4) js. В неё добавляется 16цифр разбитые по 4шт (сделай это регулярные выражения) каждая цифра это рандомное число от 0-9
* 5) В нижнем правом углу карточки - имя пользователя (либо promt либо рандомить с массива)
* 6) Создать массив платежных систем и рандомно подставлять систему в карточку (создать див с классом (visa/mc) добавлять соответскующий класс в зависимости от рандома и иконку).
* */
const getRandom = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getNames(names){ //Отдает рандомное имя
    let n = getRandom(names.length);
    return names[n];
}
function getPay(paySistem){ //Отдает рандомное имя
    let n = getRandom(paySistem.length);
    return paySistem[n];
}

let main = document.body.childNodes[1];
function addBox() {
    main.innerHTML += `<div class="box"><div class="numberCard">${number}</div><div class="user">${getNames(names)}</div><div class="icon">${getPay(paySistem)}</div></div>`;
}

let number = [];
let c = 16;
let str = "";
while(c--) {
    str += getRandom();
    if (c % 4 === 0){
        number.push(str);
        str = "";
    }
}
console.log(number);

let	names = [
    "Андрей",
    "Август",
    "Адам",
    "Богдан",
    "Боголюб",
    "Вадим",
    "Вальтер",
    "Василий",
    "Геннадий",
    "Георгий",
    "Глеб",
    "Гордей",
    "Денис",
    "Джордан",
    "Дмитрий",
    "Евгений",
    "Евграф",
    "Ефрем",
    "Жан",
    "Ждан",
    "Жорж",
    "Захар",
    "Захария",
    "Зигмунд",
    "Зиновий",
    "Ибрагим",
    "Иван",
    "Ким",
    "Кирилл",
    "Кузьма",
    "Лазарь",
    "Лев",
    "Мадлен",
    "Май",
    "Макар",
    "Назар",
    "Нифонт",
    "Олан",
    "Олег",
    "Оскар",
    "Павел",
    "Парамон",
    "Прохор",
    "Равиль",
    "Роман",
    "Савва",
    "Стоян",
    "Трифон",
    "Трофим",
    "Ульманас",
    "Устин",
    "Фаддей",
    "Федор",
    "Франц",
    "Фридрих",
    "Харитон",
    "Христиан",
    "Христос",
    "Христофор",
    "Эдвард",
    "Эдуард",
    "Эрнест",
    "Юлиан",
    "Юрий",
    "Юхим",
    "Ян",
    "Яромир",
    "Ярослав"
];

let paySistem = [
    "visa", "master card", "jcb", "union card", "dci", "union pay"
]



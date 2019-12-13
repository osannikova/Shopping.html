const list = document.createElement('ul');
list.classList.add('dynamic');
list.textContent = ' ';
 for (let i = 0; i < 10; i++) {
const newList = list.cloneNode(true);
newList.textContent = i + list.textContent;
ul.appendChild(newList);
}

//кнопка
const addItem = document.querySelector('add-item');
addItem.addEventListener('click', itemAdded);
function itemAdded() {
    const newList = list.cloneNode(true);
    ul.appendChild(newList);    
}

var x = document.getElementById("myList").textContent;
// const sect = document.querySelector('section');
// const para = document.createElement('p');

// para.classList.add('dynamic');
// para.textContent = ' We hope you enjoyed the ride.';
// for (let i = 0; i < 10; i++) {
//     const newPara = para.cloneNode(true);
//     newPara.textContent = i + 1 + para.textContent;
//     sect.appendChild(newPara);
// }

// for (let i = 0; i < 5; i++) {
//     const parToRemove = document.querySelector('section p.dynamic');
//     sect.removeChild(parToRemove);
// }

// const clickMe = document.querySelector('.click-me');
// clickMe.addEventListener('click', btnClicked);

// function btnClicked() {
//     



//  document.querySelector('.calc').addEventListener('click', calc);
// function calc() {
//     const display = document.querySelector('.display');
//     display.value = eval(display.value);
// }

//   document.querySelector('.clear').addEventListener('click', clear);
// function clear() {
//     const display = document.querySelector('.display');
//     display.value = '';
// }
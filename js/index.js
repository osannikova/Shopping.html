const clock = document.querySelector('.clock');
const updateTime = () => (clock.innerHTML = new Date().toLocaleTimeString());
setInterval(updateTime, 1000);

const img = document.querySelector('img');
if (Math.random() > 0.5) {
  img.src = 'img/milk.jpg';
}

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let addItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = addItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  };

  input.focus();
};
function moneyConverter(valNum) {
    document.getElementById("outputUah").innerHTML = valNum * 23.5;
}
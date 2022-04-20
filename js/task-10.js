// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount 
// и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета. .style.backgroundColor
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  boxesEl: document.querySelector('#boxes'),
  amountEl: document.querySelector('input'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
}

refs.createEl.addEventListener('click', createBoxes);
refs.amountEl.addEventListener('input', onAmountChange);

function onAmountChange (event){
const amountOfBoxes = event.currentTarget.value;
  return amountOfBoxes;}

function createBoxes(amount) {
  console.log(amount);
  const boxEl = document.createElement("div");
  boxEl.style.width = '30px';
  boxEl.style.height = '30px';
  boxEl.style.backgroundColor = getRandomHexColor();
  refs.boxesEl.appendChild(boxEl);
}
// refs.destroyEl.addEventListener('click', destroyBoxes);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

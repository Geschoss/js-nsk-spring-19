/**
 * получить элементы со страницы
 * элемент куда будем записывать текст
 * поле ввода
 */
const key = 'key';

const textElem = key + document.getElementById('text').innerText;

function textСheck(text) {
  const inputEle = key + text.value;

  if (textElem.includes(inputEle)) {
    document.getElementById('inputText').style.background = '';
  } else {
    document.getElementById('inputText').style.background = 'red';
  }
}
if (key === 0) {
  textСheck();
}
let timerId = '';

function gameOver() {
  // eslint-disable-next-line no-alert
  if (window.confirm('Начать заного?')) {
    clearTimeout(timerId);
    document.getElementById('inputText').style.background = '';
    document.getElementById('inputText').value = '';
    timerId = setTimeout(gameOver, 300 * textElem.length);
  }
}
let temp = '';

setInterval(() => {
  if ((document.getElementById('inputText').value.length - temp) * 20 > 0) {
    document.getElementById('printSpeed').innerHTML = (document.getElementById('inputText').value.length - temp) * 20;
  }
  temp = document.getElementById('inputText').value.length;
}, 3000);

timerId = setTimeout(gameOver, 300 * textElem.length);

/**
 * состояние нашего приложения
 * добавить в объект текущий текст, который мы будем показывать
 */
// const state = { m: 1 };

/**
 * отобразить текст на странице
 */

/**
 * добавить обработкич нажания на клавиши и сравнивать введенный текст пользователем с сохраненным ранее
 * если они отличаются, то изменить цвет текста на красный
 */

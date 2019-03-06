/* eslint-disable spaced-comment */
let textElem;

//запрос теста
function getText() {
  const newText = new XMLHttpRequest();

  newText.open('GET', 'https://fish-text.ru/get?format=html&number=1', false);
  newText.send();
  textElem = `key${newText.responseText.replace('<p>', '').replace('</p>', '')}`;
  document.getElementById('text').innerHTML = '<span></span>' + textElem.replace('key', '');
}
getText();
//следим за ошибками в input
let errorCounter = Math.trunc(textElem.length / 30); //расчет возможного кол-ва ошибок

// eslint-disable-next-line no-unused-vars
function textСheck(text) {
  const inputEle = `key${text.value}`;

  if (textElem.includes(inputEle)) {
    document.getElementById('text').innerHTML = '<span>' + text.value + '</span>' + textElem.replace(`key${text.value}`, '');
    document.getElementById('inputText').style.background = '';
  } else {
    document.getElementById('inputText').style.background = 'red';
  }
  // eslint-disable-next-line no-unused-expressions
  !textElem.includes(inputEle) ? eraseLife(--errorCounter) : '';
  // eslint-disable-next-line no-unused-expressions
  errorCounter < 1 ? gameOver() : '';
}

//выводим скорость набора текста
let temp = '';

setInterval(() => {
  if ((document.getElementById('inputText').value.length - temp) * 20 > 0) {
    document.getElementById('printSpeed').innerHTML = (document.getElementById('inputText').value.length - temp) * 20;
  }
  temp = document.getElementById('inputText').value.length;
}, 3000);
let timerId = setTimeout(gameOver, 300 * textElem.length);

// пока секундомер игры(переделать на таймер)
let timeText = Math.floor((300 * textElem.length) / 1000);

setInterval(() => {
  // eslint-disable-next-line no-unused-expressions
  timeText >= 60 ? (document.getElementById('printTimeMin').innerHTML = `0${Math.floor(timeText / 60)}`) : '';
  document.getElementById('printTimeSec').innerHTML = timeText % 60 < 10 ? `0${timeText % 60}` : timeText % 60;
  if (timeText < 10 && timeText % 2) {
    document.getElementById('textTime').style.color = 'red';
    document.getElementById('textTime').style.fontSize = '1.8em';
  } else if (timeText < 10) {
    document.getElementById('textTime').style.color = '';
    document.getElementById('textTime').style.fontSize = '1.5em';
  }
  timeText -= 1;
}, 1000);

//выводим количество жизни
function constructorLive(amountLife) {
  let newUl = '';

  while (amountLife) {
    newUl += '<li></li>';
    // eslint-disable-next-line no-param-reassign
    amountLife -= 1;
  }
  return newUl;
}
document.getElementById('listLive').innerHTML = constructorLive(Math.trunc(textElem.length / 30));

//выводим сообщение о конце игры
function gameOver() {
  // eslint-disable-next-line no-alert
  if (window.confirm('Начать заного?')) {
    clearTimeout(timerId);
    document.getElementById('inputText').style.background = '';
    document.getElementById('inputText').value = '';
    timerId = setTimeout(gameOver, 300 * textElem.length);
    getText();
    document.getElementById('listLive').innerHTML = constructorLive(Math.trunc(textElem.length / 30));
    while (errorCounter < Math.trunc(textElem.length / 30)) {
      document.getElementById('listLive').querySelectorAll('li')[errorCounter].style.background = 'green';
      errorCounter += 1;
    }
  }
  timeText = Math.floor((300 * textElem.length) / 1000);
}

//стираем жизнь
// eslint-disable-next-line no-shadow
function eraseLife(errorCounter) {
  document.getElementById('listLive').querySelectorAll('li')[errorCounter].style.background = 'red';
}

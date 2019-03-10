/* eslint-disable spaced-comment */
let textElem;

let timeGame;

let timeText;

let currentTime;

function timer(timeText) {
  currentTime = timeText;
  // eslint-disable-next-line no-unused-vars
  timeGame = setInterval(() => {
    // eslint-disable-next-line no-unused-expressions
    currentTime >= 60 ? (document.getElementById('printTimeMin').innerHTML = `0${Math.floor(currentTime / 60)}`) : '';
    document.getElementById('printTimeSec').innerHTML = currentTime % 60 < 10 ? `0${currentTime % 60}` : currentTime % 60;
    if (currentTime < 10 && currentTime % 2) {
      document.getElementById('textTime').style.color = 'red';
      document.getElementById('textTime').style.fontSize = '1.8em';
    } else if (currentTime < 10) {
      document.getElementById('textTime').style.color = '';
      document.getElementById('textTime').style.fontSize = '1.5em';
    }
    currentTime -= 1;
    // eslint-disable-next-line no-unused-expressions
    //currentTime < 0 ? clearInterval(timeGame) : '';
  }, 1000);
}
function getLokalStorage() {
  let j = 0;

  for (let i = localStorage.length - 4; i <= localStorage.length; i++) {
    document.getElementById('conteinerButton').querySelectorAll('span')[j].innerHTML =
      localStorage.getItem(i) < 60 && localStorage.getItem(i) !== null
        ? `00:${localStorage.getItem(i)}`
        : `0${Math.floor(localStorage.getItem(i) / 60)}:${
            localStorage.getItem(i) % 60 > 9 ? localStorage.getItem(i) % 60 : '0' + (localStorage.getItem(i) % 60)
          }`;
    j++;
  }
}
//запрос теста
function getText() {
  const newText = new XMLHttpRequest();

  newText.open('GET', 'https://fish-text.ru/get?format=html&number=1', false);
  newText.send();
  textElem = `key${newText.responseText.replace('<p>', '').replace('</p>', '')}`;
  document.getElementById('text').innerHTML = `<p><span></span>${textElem.replace('key', '')}</p>`;
  timeText = Math.floor((300 * textElem.length) / 1000);
  timer(timeText);
}
getText();
getLokalStorage();

//следим за ошибками в input
let errorCounter = Math.trunc(textElem.length / 30); //расчет возможного кол-ва ошибок

// eslint-disable-next-line no-unused-vars
function textСheck(text) {
  const inputEle = `key${text.value}`;

  if (textElem.includes(inputEle)) {
    document.getElementById('text').innerHTML = `<span>${text.value}</span>${textElem.replace(`key${text.value}`, '')}`;
    document.getElementById('inputText').style.background = '';
  } else {
    document.getElementById('inputText').style.background = 'red';
  }
  // eslint-disable-next-line no-unused-expressions
  !textElem.includes(inputEle) ? eraseLife(--errorCounter) : '';
  // eslint-disable-next-line no-unused-expressions
  errorCounter < 1 ? gameOver() : '';
  if (inputEle === textElem) {
    gameEnd();
    getText();
  }
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
  clearInterval(timeGame);
  document.getElementById('inputText').disabled = true;
}

//стираем жизнь
// eslint-disable-next-line no-shadow
function eraseLife(errorCounter) {
  document.getElementById('listLive').querySelectorAll('li')[errorCounter].style.background = 'red';
}

// eslint-disable-next-line no-unused-vars
function timeStop() {
  const stopStyle = getComputedStyle(document.getElementById('stop'));

  // eslint-disable-next-line no-shadow
  const temp = currentTime;

  // eslint-disable-next-line no-cond-assign
  if (stopStyle.backgroundImage === 'url("http://www.cgliberty.com/itrazvedka/icons/49.png")') {
    document.getElementById('stop').style.backgroundImage =
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWeUlaiJxx2xUx5jqTuamVHco_rVe73oV-TdY4QxZ6ZVSNpnH")';
    clearInterval(timeGame);
    clearTimeout(timerId);
    document.getElementById('inputText').disabled = true;
  } else {
    document.getElementById('stop').style.backgroundImage = 'url("http://www.cgliberty.com/itrazvedka/icons/49.png")';
    timer(temp);
    timerId = setTimeout(gameOver, (temp + 1) * 1000);
    document.getElementById('inputText').disabled = false;
  }
}

function gameEnd() {
  localStorage.setItem(localStorage.length + 1, currentTime + 1);
  clearInterval(timeGame);
  clearTimeout(timerId);
  getLokalStorage();
}

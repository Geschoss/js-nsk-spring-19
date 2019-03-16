/* eslint-disable spaced-comment */
import { variables } from './variables';
import { getLokalStorage } from './getLokalStorage';
import { gameEnd } from './gameEnd';
import { constructorLive } from './constructorLive';
import { eraseLife } from './eraseLife';
import { timer } from './timer';
import { getText } from './getText';
import { gameOver } from './gameOver';

getText();
getLokalStorage();
//расчет возможного кол-ва ошибок
variables.errorCounter = Math.trunc(variables.textElem.length / 30);
//следим за ошибками в input
// eslint-disable-next-line func-names
document.getElementById('inputText').oninput = function() {
  const inputEle = `key${document.getElementById('inputText').value}`;

  if (variables.textElem.includes(inputEle)) {
    document.getElementById('text').innerHTML = `<span>${document.getElementById('inputText').value}</span>${variables.textElem
      .replace(`key${document.getElementById('inputText').value}`, '')}`;
    document.getElementById('inputText').style.background = '';
  } else {
    document.getElementById('inputText').style.background = 'red';
  }
  // eslint-disable-next-line no-unused-expressions
  !variables.textElem.includes(inputEle) ? eraseLife(--variables.errorCounter) : '';
  // eslint-disable-next-line no-unused-expressions
  variables.errorCounter < 1 ? gameOver() : '';
  if (inputEle === variables.textElem) {
    // eslint-disable-next-line no-use-before-define
    document.getElementById('inputText').value = '';
    gameEnd();
    getText();
  }
};

//выводим скорость набора текста
setInterval(() => {
  if ((document.getElementById('inputText').value.length - variables.textSpeed) * 20 > 0) {
    document.getElementById('printSpeed').innerHTML = (document.getElementById('inputText').value.length - variables.textSpeed) * 20;
  }
  variables.textSpeed = document.getElementById('inputText').value.length;
}, 3000);


// eslint-disable-next-line no-use-before-define
variables.timerId = setTimeout(gameOver, 300 * variables.textElem.length);

//выводим количество жизни
document.getElementById('listLive').innerHTML = constructorLive(Math.trunc(variables.textElem.length / 30));


// eslint-disable-next-line func-names
document.getElementById('stop').onclick = function() {
  const stopStyle = getComputedStyle(document.getElementById('stop'));

  const temp = variables.currentTime;

  if (stopStyle.backgroundImage === 'url("http://www.cgliberty.com/itrazvedka/icons/49.png")') {
    document.getElementById('stop').style.backgroundImage =
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWeUlaiJxx2xUx5jqTuamVHco_rVe73oV-TdY4QxZ6ZVSNpnH")';
    clearInterval(variables.timeGame);
    clearTimeout(variables.timerId);
    document.getElementById('inputText').disabled = true;
  } else {
    document.getElementById('stop').style.backgroundImage = 'url("http://www.cgliberty.com/itrazvedka/icons/49.png")';
    timer(temp);
    variables.timerId = setTimeout(gameOver, (temp + 1) * 1000);
    document.getElementById('inputText').disabled = false;
  }
};

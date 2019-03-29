import { variables } from './variables';
import { getText } from './getText';
import { constructorLive } from './constructorLive';

// выводим сообщение о конце игры
export function gameOver() {
  document.getElementById('inputText').disabled = true;
  // eslint-disable-next-line no-alert
  if (window.confirm('Начать заного?')) {
    clearTimeout(variables.timerId);
    document.getElementById('inputText').style.background = '';
    document.getElementById('inputText').value = '';
    variables.timerId = setTimeout(gameOver, 300 * variables.textElem.length);
    getText();
    document.getElementById('listLive').innerHTML = constructorLive(Math.trunc(variables.textElem.length / 30));
    while (variables.errorCounter < Math.trunc(variables.textElem.length / 30)) {
      document.getElementById('listLive').querySelectorAll('li')[variables.errorCounter].style.background = 'green';
      variables.errorCounter += 1;
    }
    document.getElementById('inputText').disabled = false;
  }
  clearInterval(variables.timeGame);
}

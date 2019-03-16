import { variables } from './variables';
import { timer } from './timer';

// запрос теста
export function getText() {
  const newText = new XMLHttpRequest();

  newText.open('GET', 'https://fish-text.ru/get?format=html&number=1', false);
  newText.send();
  variables.textElem = `key${newText.responseText.replace('<p>', '').replace('</p>', '')}`;
  document.getElementById('text').innerHTML = `<p><span></span>${variables.textElem.replace('key', '')}</p>`;
  variables.timeText = Math.floor((300 * variables.textElem.length) / 1000);
  timer(variables.timeText);
}

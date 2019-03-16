import { variables } from './variables';

export function timer(timeText) {
  variables.currentTime = timeText;
  variables.timeGame = setInterval(() => {
    // eslint-disable-next-line no-unused-expressions
    variables.currentTime >= 60 ? (document.getElementById('printTimeMin').innerHTML = `0${Math.floor(variables.currentTime / 60)}`) : '';
    document.getElementById('printTimeSec').innerHTML = variables.currentTime % 60 < 10 ?
      `0${variables.currentTime % 60}` :
      variables.currentTime % 60;
    if (variables.currentTime < 10 && variables.currentTime % 2) {
      document.getElementById('textTime').style.color = 'red';
      document.getElementById('textTime').style.fontSize = '1.8em';
    } else if (variables.currentTime < 10) {
      document.getElementById('textTime').style.color = '';
      document.getElementById('textTime').style.fontSize = '1.5em';
    }
    variables.currentTime -= 1;
  }, 1000);
}

import { variables } from './variables';
import { getLokalStorage } from './getLokalStorage';

export function gameEnd() {
  localStorage.setItem(localStorage.length + 1, variables.currentTime + 1);
  clearInterval(variables.timeGame);
  clearTimeout(variables.timerId);
  getLokalStorage();
}

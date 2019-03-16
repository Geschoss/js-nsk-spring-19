// стираем жизнь
export function eraseLife(errorCounter) {
  document.getElementById('listLive').querySelectorAll('li')[errorCounter].style.background = 'red';
}

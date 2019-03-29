// история побед
export function getLokalStorage() {
  let j = 0;

  for (let i = localStorage.length - 4; i <= localStorage.length; i++) {
    document.getElementById('conteinerButton').querySelectorAll('span')[j].innerHTML =
      localStorage.getItem(i) < 60 && localStorage.getItem(i) !== null ?
        `00:${localStorage.getItem(i)}` :
        `0${Math.floor(localStorage.getItem(i) / 60)}:${
          localStorage.getItem(i) % 60 > 9 ? localStorage.getItem(i) % 60 : `0${localStorage.getItem(i) % 60}`
        }`;
    j += 1;
  }
}

const TEXT_BLOCK = document.getElementById('textBlock');
const INPUT = document.getElementById('inputBlock');
const MINUTES = document.getElementById('minutes');
const SECONDS = document.getElementById('seconds');
const SPEED = document.getElementById('speed');

class TypeRacer {
  constructor() {
    this.state = {
      text: [],
      index: 0,
      count: 0
    };

    this.time = {
      second: 0,
      minutes: 0,
      speed: 0
    };

    this.sendRequest = () => new Promise((resolve, reject) => {
      const XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
      const xhr = new XHR();
      const type = 'sentence';
      const number = 1;
      const params = `&type=${type}&number=${number}`;

      xhr.open('GET', `https://fish-text.ru/get?${params}`, true);
      xhr.onload = function() {
        const data = JSON.parse(this.responseText);

        if (data.status === 'success') {
          resolve(data.text);
        } else {
          console.log(`${data.errorCode}\n${data.text}`);
        }
      };
      xhr.onerror = function() {
        alert(`Ошибка ${this.status}`);
      };
      xhr.send();
    });
  }

  getText() {
    this.sendRequest()
      .then(data => {
        TEXT_BLOCK.innerHTML = data;
        this.state.text = data.split(' ');
        this.state.index = 0;
        this.state.count = 0;
        this.time.second = 0;
        this.time.minutes = 0;
        this.time.speed = 0;
      });
  }


  checkWord() {
    const resultWord = this.state.text[this.state.index].substring(0, INPUT.value.length);

    let isNext = false;

    let value = INPUT.value;

    if (value.slice(-1) === ' ') {
      value = INPUT.value.slice(0, -1);
      isNext = true;
    }

    isNext ? value = INPUT.value.slice(0, -1) : value = INPUT.value;

    if (value === resultWord) {
      INPUT.classList.remove('error');
      this.state.count += 1;
    } else {
      INPUT.classList.add('error');
    }

    if (isNext && value === resultWord) {
      this.state.index += 1;
      INPUT.value = '';
    }

    if (this.state.index === this.state.text.length) {
      alert('Поздравляю, вы прошли игру');
      this.getText();
    }
  }

  timer() {
    setInterval(() => {
      this.time.second += 1;
      this.time.speed += 1;
      SECONDS.innerHTML = this.time.second;
      if (this.time.second === 59) {
        this.time.minutes += 1;
        MINUTES.innerHTML = this.time.minutes;
        this.time.second = 0;
      }
    }, 1000);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const typeRacer = new TypeRacer();

  /* получение нового текста и сброс состояний */
  typeRacer.getText();

  /* событие по введённому символу */
  INPUT.addEventListener('keyup', event => {
    typeRacer.checkWord();
  });

  /* подсчёт скорости печати */
  setInterval(() => {
    SPEED.innerHTML = ((typeRacer.state.count) / (typeRacer.time.speed / 60));
  }, 3000);

  /* запуск таймера */
  typeRacer.timer();
});

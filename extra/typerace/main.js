const data = [
  {
    text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems '
      + 'great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we.',
    timer: '0:10'
  },
  {
    text: 'Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor '
      + 'ask walls known. But preserved advantage are but and certainty earnestly enjoyment.',
    timer: '0:10'
  },
  {
    text: 'Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but. '
      + 'Wonder twenty hunted and put income set desire expect. Am cottage calling my is mistake cousins talking up.',
    timer: '0:10'
  },
  {
    text: 'At every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come '
      + 'whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused.',
    timer: '0:10'
  },
  {
    text: 'In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no '
      + 'decisively. Marianne jointures attended she hastened surprise but she. Ever lady son yet you very paid form '
      + 'away.',
    timer: '0:10'
  },
  {
    text: 'Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two '
      + 'real miss use easy. Celebrated delightful an especially increasing instrument am.',
    timer: '0:10'
  }
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEndMessage(inputElem, endMessage) {
  inputElem.disabled = true;
  endMessage.style.display = 'block';
}

function getInput(inputElem, textElem, endMessage) {
  inputElem.addEventListener('input', () => {
    const enteredStr = inputElem.value;

    if (textElem.innerHTML.startsWith(enteredStr)) {
      inputElem.style.color = 'darkslategrey';
    } else {
      inputElem.style.color = '#ea6666';
    }

    if (inputElem.value === '') {
      inputElem.style.color = 'darkslategrey';
    }

    if (enteredStr.length === textElem.innerHTML.length) {
      getEndMessage(inputElem, endMessage);
    }
  });
}

function reloadGame(elemBtn) {
  elemBtn.addEventListener('click', () => {
    window.location.reload();
  });
}

function getSpentTime(state, min, sec) {
  const beginTime = state.time;
  const currentTime = `${min}:${sec}`;
  const getDate = string => new Date(0, 0, 0, 0, string.split(':')[0], string.split(':')[1]);

  return (getDate(beginTime) - getDate(currentTime)) / 60000;
}

function getEnteredWords(enteredStr) {
  const arr = enteredStr.split(' ');

  let res = arr.length;

  if (arr[0] === '') {
    res = 0;
  }
  return res;
}

function createTimer(state, endMessage, { timerElem, inputElem, wpmElem }) {
  const time = state.time.split(':');

  let min = Number(time[0]);

  let sec = Number(time[1]);
  const timer = setInterval(() => {
    timerElem.innerHTML = `The race is on! Time left: ${min}:${sec}`;
    sec -= 1;

    if (sec < 0 && min > 0) {
      min -= 1;
      sec = 59;
    }

    if (sec < 10) {
      timerElem.innerHTML = `The race is on! Time left: ${min}:0${sec}`;
    }

    if (sec < 0 && min === 0) {
      clearInterval(timer);
      timerElem.innerHTML = 'The race is on! Time left: expired';
      getEndMessage(inputElem, endMessage);
    }
  }, 1000);
  const wpmTimer = setInterval(() => {
    const currentStr = inputElem.value;
    const wordsQuantity = getEnteredWords(currentStr);
    const currentSpentTime = getSpentTime(state, min, sec);
    const wpm = Math.floor(wordsQuantity / currentSpentTime);

    wpmElem.innerHTML = `${wpm} wpm`;
    if (currentSpentTime > Number(time[0]) + Number(time[1]) / 60) {
      clearInterval(wpmTimer);
    }
  }, 3000);
}

function run() {
  const textElem = document.querySelector('.main__text');
  const inputElem = document.querySelector('.main__inputField_input');
  const random = getRandom(0, 5);
  const state = {
    text: data[random].text,
    time: data[random].timer
  };

  textElem.innerHTML = state.text;
  const endMessage = document.querySelector('.main__endMessage');
  const elemBtn = document.querySelector('.main__endMessage_btn');
  const timerElem = document.querySelector('.main__inputField_timer');
  const wpmElem = document.querySelector('.main__inputField_wpm');

  getInput(inputElem, textElem, endMessage);
  createTimer(state, endMessage, { timerElem, inputElem, wpmElem });
  reloadGame(elemBtn);
}

run();

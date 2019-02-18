/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
const textElem = document.getElementById('typerace-text');
const inputElem = document.getElementById('typerace-input');
const timer = document.getElementById('typerace-timer');
const clock = document.getElementById('typerace-clock_text');


const state = { text: '' };

function textInit() {
  const list = [
    'В начале ноября погода сильно испортилась. Расположенные вокруг замка горы сменили зеленый цвет на серый, озеро стало напоминать заледеневшую сталь, а земля каждое утро белела инеем.',
    'Гарри со вздохом кивнул. Конечно, уйти отсюда не так трудно, как отправиться на смерть в Запретный лес, но все же здесь было тепло, светло и уютно, а впереди его ждали, он знал это, боль и новые потери.',
    'Окно показывало смазанные ели, белый шум ноябрьской пурги; телеграфные столбы мельтешили, как поползшие рамки кадра в черно-белом кино.',
    'Сегодня я, Прасковья Осиповна, не буду пить кофию, — сказал Иван Яковлевич, — а вместо того хочется мне съесть горячего хлебца с луком.',
    'Он засунул пальцы и вытащил — нос!.. Иван Яковлевич и руки опустил; стал протирать глаза и щупать: нос, точно нос!',
    'Иван Яковлевич, как всякий порядочный русский мастеровой, был пьяница страшный. ',
    'Щас сяду и еще раз попробую, – снова примирительно улыбается парень.',
    'Проезд по территории запрещен. Знаки читать надо.',
    'Маху дал! Извини! Сорри! Ящика-то в зеркало не видно! С этими прицепами вечно фигня – никогда не знаешь, куда вывернут.',
    'Отойди, не путайся под колесами!',
    'Елы-палы, любой безрукий с глаукомой на обоих глазах управится с прицепом скорей тебя, – досадует Уве, залезая в машину.',
    'Тут сбоку появляется увалень и вкрадчиво стучит по стеклу. Уве опускает стекло и с кислой миной смотрит на увальня.'
  ];

  function randomize() {
    const rnd = Math.random() * 12;

    return Math.round(rnd);
  }
  textElem.innerHTML = list[randomize()];
}
function timeInitial() {
  const textLength = textElem.innerHTML.split(' ').filter(item => item.length !== 0).length;

  let minutes = Math.floor(textLength * 3 / 60);

  let seconds = textLength * 3 - minutes * 60;

  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  if (seconds.toString().length === 1) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

textInit();
clock.innerHTML = timeInitial();

// eslint-disable-next-line no-unused-vars
function textCheck() {
  state.text = inputElem.value;

  const reg = new RegExp(`^${state.text}`, 'g');

  const fulReg = new RegExp(textElem.innerHTML, 'g');

  textElem.innerHTML.match(reg) ? inputElem.style = 'background: #fff' : inputElem.style = 'background: red';

  if (state.text.match(fulReg)) {
    const req = confirm('Задание выполнено! Еще одно?');

    if (req) {
      inputElem.value = '';
      clock.innerHTML = timeInitial();
      textInit();
    }
  }
}
let oldWord = 0;

let word = 0;

setInterval(() => {
  const currentWrd = state.text.length;

  word = currentWrd;
  word -= oldWord;
  if (word < 0) {
    word = 0;
  }
  oldWord = currentWrd;
  timer.innerHTML = `<strong>${word * 20}</strong>`;
}, 3000);

function reduceTime(timeInSec) {
  let minutes = Math.floor(timeInSec / 60);

  let seconds = timeInSec - 60 * minutes;

  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  if (seconds.toString().length === 1) {
    seconds = `0${seconds}`;
  }
  clock.innerHTML = `${minutes}:${seconds}`;
}
setInterval(() => {
  const time = clock.innerHTML;

  let timeInSec = (parseInt(time[0]) + parseInt(time[1])) * 60 + parseInt(time[3] + time[4]);

  if (timeInSec !== 0) {
    timeInSec -= 1;
    reduceTime(timeInSec);
  } else {
    clock.innerHTML = '00:00';
    const req = confirm('Слишком долго вводите! Начать заново?');

    if (req) {
      clock.innerHTML = timeInitial();
    } else {
      inputElem.value = '';
      clock.innerHTML = timeInitial();
      textInit();
    }
  }
}, 1000);

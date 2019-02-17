/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export function rle(input) {
  let str = '';

  let temp = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      temp += 1;
    } else {
      temp > 1 ? (str += input[i - 1] + temp) : (str += input[i]);
      temp = 1;
    }
  }
  return str;
}

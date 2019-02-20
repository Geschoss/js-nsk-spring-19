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
  const str = input.split('');

  let preLetter = str[0];

  let count = 1;

  let result = preLetter;

  str.slice(1).forEach((item, i, arr) => {
    if (item === preLetter) {
      if (i !== arr.length - 1) { count++; } else {
        count++;
        result += count;
      }
    } else
    if (count > 1) {
      result += count + item;
      count = 1;
      preLetter = item;
    } else {
      result += item;
      preLetter = item;
    }
  });
  return result;
}

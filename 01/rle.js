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
  const str = input;

  const obj = [];

  let tmp = [];

  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      tmp.push(str[i]);
    } else {
      tmp.push(str[i]);
      obj.push(tmp);
      tmp = [];
    }
  }

  for (const k in obj) {
    obj[k].length > 1 ?
      result = result + obj[k][0] + obj[k].length :
      result += obj[k][0];
  }

  return result;
}

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
  const matches = [...input];

  const obj = [];

  let resultStr = '';

  for (let letter = 0; letter < matches.length; letter++) {
    matches[letter] !== matches[letter + 1] ? obj.push(matches[letter]) : obj.push(1);
  }
  for (let i = 0; i < obj.length; i++) {
    let res = 1;

    if (obj[i] !== 1) {
      let k = 1;

      // eslint-disable-next-line max-depth
      while (obj[i - k] === 1) {
        res += 1;
        k += 1;
      }
      res !== 1 ? resultStr += obj[i] + res : resultStr += obj[i];
    }
  }
  return resultStr;
}

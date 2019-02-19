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
  const res = [];

  for (let i = 0, counter = 1; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter += 1;
    } else {
      res.push(input[i]);
      res.push(counter > 1 ? counter : null);
      counter = 1;
    }
  }

  return res.join('');
}

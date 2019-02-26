/**
 * Напишите функцию reduceMap(fn, input), создающую новый
 * массив с результатами вызова функции fn на каждом
 * элементе массива input.
 *
 * Для реализации функции используйте reduce.
 *
 * Пример:
 * reduceMap(x => x * 2, [1, 2, 3]); // [2, 4, 6]
 *
 * @param {Function} fn    функция-маппер
 * @param {*[]}      input массив значений
 */
export function reduceMap(fn, input) {
  // eslint-disable-next-line no-return-assign
  input.reduce((pv, x, i) => (input[i] = fn(x)), 0);
  return input;
}

/**
 * Напишите функцию reduceFilter(fn, input), создающую новый
 * массив из значений массива input, удовлетворяющих
 * проверке fn.
 *
 * Для реализации функции используйте reduce.
 *
 * @param {Function} fn    функция-предикат
 * @param {*[]}      input массив значений
 */
export function reduceFilter(fn, input) {
  const arr = [];

  input.reduce((pv, x) => (fn(x) ? arr.push(x) : undefined), 0);
  return arr;
}

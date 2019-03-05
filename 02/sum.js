/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 * @param {*} x число или undefined
 * @returns number * это уже сами решите
 */
export function sum(x) {
  let count = x;

  if (count === undefined) {
    return 0;
  }

  const func = y => {
    if (y === undefined) {
      return count;
    } count += y; return func;
  };

  return func;
}

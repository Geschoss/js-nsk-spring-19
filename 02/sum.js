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
 * @returns а это уже сами решите
 */
export function sum(x) {
  let currentSum = x || 0;

  function f(n) {
    // eslint-disable-next-line no-unused-expressions
    n ? (currentSum += n) : '';
    return f;
  }
  // eslint-disable-next-line func-names
  f.toString = function() {
    return currentSum;
  };
  return f;
}

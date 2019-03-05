/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  function getArr(val) {
    return val.toString().split('');
  }

  function getSum(arr) {
    return arr.reduce((a, b) => Number(a) + Number(b));
  }

  const numbersArr = getArr(number);

  let sum = getSum(numbersArr);

  while (sum > 9) {
    const temp = getArr(sum);

    sum = getSum(temp);
  }

  return Number(sum);
}

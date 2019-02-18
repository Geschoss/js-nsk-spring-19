/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
export function getMinMax(input) {
  const obj = {
    min: '',
    max: ''
  };

  let nums = input.split(' ');

  nums = nums.map(num => num.replace(/[,;]/g, ''));
  nums = nums.filter(num => num / 0);
  nums = nums.map(num => {
    let res;

    if (num.indexOf('.') === -1) {
      // eslint-disable-next-line radix
      res = parseInt(num);
      if (num === 'Infinity') {
        res = Infinity;
      }
    } else {
      res = parseFloat(num);
    }
    return res;
  });
  obj.min = Math.min(...nums);
  obj.max = Math.max(...nums);
  return obj;
}

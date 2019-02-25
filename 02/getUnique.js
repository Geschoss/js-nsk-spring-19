/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {Set<any>} массив уникальных значений, отсортированный по возрастанию
 */
export function getUnique(input) {
  const obj = {};

  for (let i = 0; i < input.length; i++) {
    obj[input[i]] = true;
  }
  const arr = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  return arr.sort();
}

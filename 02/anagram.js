/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  const arr1 = first.toLowerCase().split('');
  const arr2 = second.toLowerCase().split('');

  return arr1.every(item => arr2.includes(item) && arr1.length === arr2.length);
}

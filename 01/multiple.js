/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */
export function multiplication(a, b) {
  function mul(d, f) {
    let first = d;

    let second = f;

    let c = 0;

    if (second > first) {
      const temp = first;

      first = second;
      second = temp;
    }
    while (second) {
      c += first;
      second -= 1;
    }
    return c;
  }
  return (a < 0 && b > 0) || (a > 0 && b < 0) ? -mul(Math.abs(a), Math.abs(b)) : mul(Math.abs(a), Math.abs(b));
}

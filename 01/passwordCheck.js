/**
 * Напишите функцию passwordCheck(password), принимающую строку password
 * и проверяющую её на сложность. Если сложность достаточна, вернуть true,
 * иначе - false.
 *
 * Достаточной сложность считается, если в строке:
 * - Есть хотя бы одно число
 * - Есть хотя бы две буквы латинского алфавита в разных регистрах
 * - Есть хотя бы один символ из ряда ! ? . , + - * / =
 * - Содержит не менее 10 символов
 *
 * Пример:
 * passwordCheck('Nagibator777') === false
 * passwordCheck('password') === false
 * passwordCheck('This is the 7th password I have come up with!') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} password пароль
 * @return {boolean}
 */
export function passwordCheck(password) {
  let num = false;

  let twolatin = false;

  let upper = false;

  let sym = false;

  let len = false;

  let result = false;

  function check() {
    password.match(/[A-Z]/g) ? upper = true : upper = false;
    password.match(/\d/) ? num = true : num = false;
    password.match(/[a-zA-Z]{2}/g) ? twolatin = true : twolatin = false;
    password.match(/[-=+*,.?!]/g) ? sym = true : sym = false;
    password.length >= 10 ? len = true : len = false;
  }
  check();
  num && twolatin && upper && sym && len ? result = true : result = false;
  return result;
}

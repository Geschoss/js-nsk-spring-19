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

/* Я сделала два варианта решения задачи, второе ниже заккомменчено */
export function passwordCheck(password) {
  return /^(?=.*\d)(?=.*[!?.,+*/])(?=.*[A-Z])(?=.*[a-z]).{10,}$/.test(password);
}

// export function passwordCheck(password) {
//   const res = {
//     number: false,
//     upperCaseLetter: false,
//     lowerCaseLetter: false,
//     symbol: false
//   };
//   const availableSymbols = ['!', '?', '.', ',', '+', '-', '*', '/', '='];
//   const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//
//   for (let i = 0; i < password.length; i++) {
//     if (password.includes(availableSymbols[i])) {
//       res.symbol = true;
//     }
//     if (password.includes(nums[i])) {
//       res.number = true;
//     }
//     if (password[i] === password[i].toUpperCase()) {
//       res.upperCaseLetter = true;
//     }
//     if (password[i] === password[i].toLowerCase()) {
//       res.lowerCaseLetter = true;
//     }
//   }
//
//   return (password.length > 9) && res.upperCaseLetter && res.lowerCaseLetter && res.number && res.symbol;
// }

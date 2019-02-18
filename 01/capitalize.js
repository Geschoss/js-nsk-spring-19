/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */

// Первый вариант на for {item} in {array}

export function capitalize(input) {
  const mass = [...input];

  let result = '';

  let sign = false;

  for (const letter of mass) {
    if (!sign) {
      result += letter;
    } else {
      result += letter.toUpperCase();
      sign = false;
    }
    if (letter === ' ') {
      sign = true;
    }
  }
  return result;
}

// Ниже та же самая функция, на 'классическом' цикле for

export function capitalizeTwo(input) {
  const mass = [...input];

  let result = mass[0];

  for (let letter = 0; letter < mass.length - 1; letter++) {
    if (input[letter] === ' ') {
      result += mass[letter + 1].toUpperCase();
    } else {
      result += mass[letter + 1];
    }
  }
  return result;
}

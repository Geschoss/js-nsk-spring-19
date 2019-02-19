/**
 * Напишите функцию limitCalls(fn, maxCalls), принимающую функцию fn,
 * и возвращающую новую функцию, которую можно вызвать не более
 * указанного в maxCalls количества раз.
 *
 * В целях упрощени, входящая функция не принимает никаких аргументов, работу с
 * аргументами можно не учитывать.
 *
 * Пример:
 * const limitedLog = limitCalls(() => console.log('log'), 2);
 * limitedLog(); // 'log'
 * limitedLog(); // 'log'
 * limitedLog(); // undefined
 * limitedLog(); // undefined
 *
 * Больше примеров в тестах.
 *
 * @param  {Function} fn функция
 * @param  {number} maxCalls максимальное количество вызовов
 * @return {Function}
 */
export function limitCalls(fn, maxCalls) {
    let calls = 0;
    
    return function () {  
        calls = calls + 1;
        if (calls >= maxCalls) return;
        fn();
    }
}

// const increment = () => { count += 1; };
// let limitedIncrementA = limitCalls(increment, 3);

// limitedIncrementA();
// limitedIncrementA();
// limitedIncrementA();
// limitedIncrementA();
// limitedIncrementA();

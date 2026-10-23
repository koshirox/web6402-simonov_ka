function isInteger(n) {
    return typeof n === 'number' && n === (n | 0); // функция, которая проверяет, является ли число целым используя побитовые операторы
}

function even() { // функция, которая возвращает массив четных чисел от 2 до 20 включительно
    const numbers = [];

    for (let n = 2; n <= 20; n += 2) {
        numbers.push(n);
    }

    return numbers;
}

function sumTo(n) { // функция, считающую сумму чисел до заданного используя цикл
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function recSumTo(n) { // функция, считающую сумму чисел до заданного используя рекурсию
    if (n <= 0) {
        return 0;
    }

    return n + recSumTo(n - 1);
}

function factorial(n) { // функция, считающую факториал заданного числа
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function isBinary(n) { // функция, которая определяет, является ли число двойкой, возведенной в степень
    if (!Number.isInteger(n) || n < 1) {
        return false;
    }

    while (n % 2 === 0) {
        n /= 2;
    }

    return n === 1;
}

function fibonacci(n) { // функция, которая находит N-е число Фибоначчи
    if (n <= 0) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    let previous = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
}

// Создаёт функцию, которая применяет операцию и хранит результат между вызовами.
// Если операция не задана, всегда возвращает начальное значение.
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;

    return function (newValue) {
        if (typeof operatorFn === 'function') {
            storedValue = operatorFn(storedValue, newValue);
        }

        return storedValue;
    };
}

// Создаёт генератор последовательности: каждый вызов возвращает следующее число.
function sequence(start = 0, step = 1) {
    let current = start;

    return function () {
        const value = current;
        current += step;
        return value;
    };
}

// Сравнивает значения и вложенные объекты по содержимому.
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }

    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }

    if (
        firstObject === null ||
        secondObject === null ||
        typeof firstObject !== 'object' ||
        typeof secondObject !== 'object'
    ) {
        return false;
    }

    if (Array.isArray(firstObject) !== Array.isArray(secondObject)) {
        return false;
    }

    if (
        Array.isArray(firstObject) &&
        firstObject.length !== secondObject.length
    ) {
        return false;
    }

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    for (const key of firstKeys) {
        if (
            !Object.prototype.hasOwnProperty.call(secondObject, key) ||
            !deepEqual(firstObject[key], secondObject[key])
        ) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};

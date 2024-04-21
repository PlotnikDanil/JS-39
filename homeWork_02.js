//Создание объекта counter
const counter_1 = { name: 'Danil', age: 26, };

const counter_2 = new Object();

const counter_3 = Object.assign({});

const counter_4 = Object.create({}, {key: {
    value: 'Value',
    writable: true,
    configurable: true,
    enumerable: true,
}});

const counter_5 = {...{}};

class Counter {
    constructor (count) {
        this.count = count;
    }
}

const counter_6 = new Counter();

function constructorCounter(count) {
    this.count = count;
}

const counter_7 = new constructorCounter();


//Копирование объекта counter
const counterCopy_1 = {...counter_1};

const counterCopy_2 = Object.assign({}, counter_1);

const counterCopy_3 = JSON.parse(JSON.stringify(counter_1));

const counterCopy_4 = structuredClone(counter_1);


// Создание функции makeCounter
function makeCounter_1() {}

const makeCounter_2 = function() {}

const makeCounter_3 = () => {}

const makeCounter_4 = function makeCounter__4() {}

const makeCounter_5 = new Function('a', 'b', '{ return a + b }')


// Функция для глубокого сравнения двух объектов
const obj1 = {
    here: {
        is: "on",
        other: "3"
    },
    object: "Y"
};

const obj2 = {
    here: {
        is: "on",
        other: "2"
    },
    object: "Y"
};

const deepEqual = (obj1, obj2) => {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length === keys2.length) {
            for (let key of keys1) {
                if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                    if (!deepEqual(obj1[key], obj2[key])) {
                        return false;
                    }
                } else if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
} 


// Функция для разворота строки при помощи методов массива
function reverseSt(str) {
    return str.split('').reverse().join();
}
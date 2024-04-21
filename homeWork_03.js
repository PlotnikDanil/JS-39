// Привязка контекста
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { 
    item: "some value" 
};

const loggerCall = logger.call(obj);
const loggerApply = logger.apply(obj);
const loggerBind = logger.bind(obj)();


//Массивы
const arrNumb = [5, 2, 4, 1, 3];
const arrStr = ['S', 't', 'r', 'i', 'n', 'g'];

function getSumElementArr(arr) {
    return arr.reduce((acc, el) => {
        acc+=el;
        return acc;
    })
}

function getMinAndMaxElementArr(arr) {
    const result = arr.sort((a, b) => {
        return a - b;
    })
    return `${result[0]} and ${result[result.length - 1]}`;
}


//Стэк
class Stack {
    constructor() {
        this.stack = [];
    }
    push(el) {
        this.stack.push(el);
    }
    pop() {
        this.stack.pop();
    } 
    getLastElement() {
        if (this.stack.length === 0) {
            return `stack is empty`;
        }
        return this.stack[this.stack.length - 1];
    }
    stackIsEmpty() {
        if (this.stack.length > 0) {
            return `stack is not empty`;
        } else { return `stack is empty`;}
    }
}


//Очередь
class Queue {
    constructor() {
        this.queue = [];
    }
    push(el) {
        this.queue.push(el);
    }
    shift() {
        this.queue.shift();
    }
    getFirstElement() {
        if (this.queue.length === 0) {
            return `queue is empty`;
        }
        return this.queue[0];
    }
    queueIsEmpty() {
        if (this.queue.length > 0) {
            return `queue is not empty`;
        } else { return `queue is empty`;}
    }
}


// Полофил bind
Function.prototype.myBind = function(context, ...args) {
    let obj = structuredClone(context);
    let symbol = Symbol('key');
    obj[symbol] = this;
    return function(...rest) {
        return obj[symbol] (...args, ...rest);
    };
}

const objName = {
    name:'Danil',
}

function sayName(age, phone) {
    console.log(`Name: ${this.name}, age: ${age}, phone: ${phone}`);
}


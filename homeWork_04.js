// Задание №3 
const person_1 = {
    name:'Danil',
    login: 'D@g.com',
}

const person2 = Object.create(person_1);

Object.setPrototypeOf(person_1, {logInfo () {
    console.log(`Name: ${this.name}, login: ${this.login}.`);
}})


function ConstructorPerson (name, login) {
    this.name = name;
    this.login = login;
}

const person_2 = new ConstructorPerson('Nikita', 'N@g.com');
const person2_2 = new ConstructorPerson('Alex', 'A@g.com');

ConstructorPerson.prototype.logInfo = function() {
    console.log(`Name: ${this.name}, login: ${this.login}.`);
}


class Person {
    constructor (name, login) {
        this.name = name;
        this.login = login;
    }
};

const person_3 = new Person('Alexandr', 'Alex@g.com');
const person2_3 = new Person('Vadim', 'V@g.com');

Person.prototype.logInfo = function() {
    console.log(`Name: ${this.name}, login: ${this.login}.`);
}


// Задание №4

class PersonThree {
    constructor (name) {
        this.name = name;
    }

    get keyName() {
        return this.name;
    }

    set keyName(name) {
        this.name = name;
    }
};

class User extends PersonThree {
}


// Бонусное задание 

function firstSum(arr, total) {
    const hash = new Map();
    let buf = 0;
    for (let i = 0; i < arr.length; i++) {
        buf = total - arr[i];
        console.log(buf);
        console.log(hash)
        console.log(`${hash.get(buf)};${arr[i]}`)
        if (hash.has(buf)) {
            return `result = [${hash.get(buf)};${arr[i]}]`;
        } else {
            console.log(`push  = ${arr[i], i}`)
            hash.set(arr[i], i);
        }
    }
    return false;
}

function firstSum1(arr, total) {
    for (let i = 0; i < arr.length; i++ ) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                return `result = [${arr[i]};${arr[j]}]`;
            }
        }
    }
} 

// Сложность O(n^2)


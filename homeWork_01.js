let num_1 = 1.3;
let num_2 = new Number(2);

let str_1 = 'String';
let str_2 = new String('Hello');
let str_3 = `2 + 2 = ${2 + 2}`;

let bln_1 = true;
let bln_2 = 3 > 5;
let bln_3 = new Boolean(true);

let undf_1;
let undf_2 = undefined;

let nll_1 = null;

let bigInt_1 = 123n;
let bigInt_2 = BigInt(2234);

let smbl_1 = Symbol('id');
let smbl_2 = Symbol.for('key');


const res = "B" + "a" + (1 - "hello");
console.log(res); 

const res2 = (true && 3) + "d";
console.log(res2); 

const res3 = Boolean(true && 3) + "d";
console.log(res3); 
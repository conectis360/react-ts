let userName: string = 'James';

// : separa o tipo do nome da variável
// através disso nós explicamos explicitamente pro typescript que é uma string

let userAge = 34;
let userAgeType :number = 34;

let isValid = true;
let isValidType :boolean = false;

let userId: string | number = 'abc1';
userId = 123;

//estamos dizendo que ele é explicitamente string ou numero, então podemos alterar entre os tipos para darmos alternativas pro typescript

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

user = {
    name: 'max',
    age: 34,
    isAdmin: true,
    id: 'abc'
};

function add(a: number, b:number) { //podemos usar todos tipos e fazer as funções mais type safe
    return a + b;
}

function minus(a: number, b:number): void { //setamos o retorno da função para void, já que não retorna nada
    a - b;
}

function multiply(a: number, b:number): number { //setamos o retorno da função para number
    return a * b;
}

function divide(a: number, b:number) { //entretanto não o fazemos, permitindo que o typescript infira o tipo de retorno ele mesmo
    return a / b;
}

type add = (a: number, b: number) => number;

function calculate(a: number, b:number, add:add) { //podemos receber uma função como parametro em outra função podendo declarar o type assim
    return a / b;
}
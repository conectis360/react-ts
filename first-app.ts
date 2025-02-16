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

function minus(a: number, b:number): undefined { //podemos usar todos tipos e fazer as funções mais type safe
    a - b;
}

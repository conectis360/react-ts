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
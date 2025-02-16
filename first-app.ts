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

interface Credentials { // interface é basicamente uma forma de criar types para objetos
    password: string;
    username: string;
}

let creds: Credentials;

creds = {
    password: 't#sT3',
    username: 'admin'
}

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    username: string;
}

//podemos usar interfaces como contratos, iguais em qualquer OOP

function login(credentials: Credentials) {

}

login(new AuthCredentials())

login(creds)

//as duas versões são uteis
/*
type Admin = {
    permissions: string[]
};


type AppUser = {
    userName: string;
}*/

//type AppAdmin = Admin & AppUser;

interface Admin {
    permissions: string[];
}

interface AppUser {
    userName: string;
}

interface AppAdmin extends Admin, AppUser {}

type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin', 'user', 'editor ao dizer : 'admin' estou dizendo que o tipo é especifico 'admin'

role = 'admin';
role = 'user';
role = 'editor';

function performAction(action: string | number, role: Role) {
    if(role === 'admin' && typeof action === 'string') {
        //... só executa se for admin, esse padrão é chamado de Type Guards
    }
}

function combine(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    }
   
    return `${a} ${b}`;
  }

  //generic type feature

  let roles: Array<Role>;
  roles = ['admin', 'editor'];

  //podemos criar nossos próprios tipos genericos

  type DataStorage<T> = { // T para Type
    storage: T[];
    add: (data: T) => void;
  }

  const textStorage: DataStorage<string> = {
    storage: [],
    add(data){
        this.storage.push(data);
    }
  }

  const userStorage: DataStorage<User> = {
    storage: [],
    add(user){}
  }

  function merge<T, U>(a: T, b:U) {
    return {
        ...a,
        ...b
    };
  }

  const newUser = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 10});

  newUser.age;

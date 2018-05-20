class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// when you use typescirpt with react, it's more acceptable that use class than interface

const lynn = new Human("Lynn", 18, "female");

const person = {
  name: "Dam",
  age: 23,
  gender: "female"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }`;
};

console.log(sayHi(lynn));

export {};

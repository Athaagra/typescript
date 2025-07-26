// named function 
function intro(name: string, age:number): string {
  return `My name is ${name} and I am ${age} years old`;
}

// Function expression 
const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
};

// Arrow functions 
const intro3 = function (name: string, age: number): string | number => {
  return `My name is ${name} and I am ${age} years old`;
};

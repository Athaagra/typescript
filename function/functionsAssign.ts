//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name:string): string {
  return 'Hello ${name}';
}
//* 2. Define a type Product with properties id (number) and name (string). Create a function named getProduct that takes 
an id parameter and returns a Product.
type Product = {
  id: number;
  name: string;
};
function getProduct(id: number): Product {
  return {id, name: "Product"};
}

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions
add and subtract that match this signature.
type Calculator = (a:number,b:number) => number;

function add(a:number,b:number): Calculator {
  return a + b ;
}

function subtract(a:number,b:number): Calculator {
  return a - b ;
}

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also create
a function named throwError that takes a string message and throws an error, returning never.
function logMessage (message:string) void {
    console.log(message);
}

function throwError (message:string) never {
    throwerror(message);
}

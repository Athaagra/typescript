// Declaration 
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

//annotation 
let firstName: string = "Mark";
let age: CustomNumber = 32;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

function addNumbers(a: number, b:number){
  return a + b;
}

// Inference
let finalResult = addNumbers(10, 15);

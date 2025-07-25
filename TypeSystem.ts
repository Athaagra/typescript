let city = "New York"; //string
let population = 8400000; // number
const age = 32; // 32
let oldAge = 79 as const; // 79
let newAge = oldAge; // 79
let data = new Map(); // Map type
let score = [90,86,100]; // [90,86,100] // number []
type Primitive = string | number | boolean; // union string,number,boolean
type CustomName = "John" extends string ? string : "John"; // John string
type CustomAge = typeof newAge extends number ? 79 : number; // 79 number
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // []

/**
* Are the following statements valid 
* Check if below lines of code are valid as per TypeScript or not without uncommenting them
**/
age = 85; //error
score.push(10);
score.push('New Score'); //error
let customAge: CustomAge = 50; //error
let primitive: Primitive = new Date(); //error
let years: CheckScore = []; 

//* 1. Create an array numbers that only accepts numbers and another array string that only accepts strings.
let numbers: number[] = [1,2,3];
let strings: string[] = ["a","b"];

//* 2. Create a tuple person that holds a string (name) and a number (age).
let preson: [string, number] = ["Alice",30];

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two 
number (x,y). Attempt to modify their elements and observe the Typescript error.
const colors: readonly string[] = ["red","green","blue"];
const point: readonly [number, number] = [10,20];

//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending 
enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

//* 5. Create an object as const called Status with the same structure as an StatusEnum 
const Status = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;

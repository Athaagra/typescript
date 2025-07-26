type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbers: Numbers = {
  a:2,
  b:3,
  c:4,
};

function sum(numbers:Numbers){
  return numbers.a + numbers.b + numbers.c;
}

function sum({a, b, c}: Numbers){
  return a + b + c;
}

console.log(sum(numberObject));
console.log(sum({a:3,b:4,c:"string"}));

interface Box<Type> {
  content: Type;
  size: number;
}

const stringBox: Box<string> = {content: "Hello, TypeScript", size: 10};
const numberBox: Box<number> = {content: 42, size: 10};

interface LengthWise {
  length:number;
}
//putting constraint in this function
// The T must always extend the LengthWise
function logLength<T extends LengthWise>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");
logLength(42);
logLength({ length: 10, values: 65});

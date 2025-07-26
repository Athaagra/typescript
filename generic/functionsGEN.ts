// problem
function returnParams(param: any){
  return param;
}
// function  type (type act variable might be an object)
function returnParams<Type>(param: Type): Type {
  return param;
}

const return1 = returnParams<string>("123");
const return2 = returnParams<number>("123");
//arrow function 
const myParam: <T>(param: T)=> T = (param)=> param;
//const function expression
const myParam2 = function <U>(param: U): U {
  return param;
};
//signature function
type ObjectType = {
  myParam:<V,X>(param: V,param2:X) => V|X;
}
// type alias
type MyParam = <K>(param: K) => K;

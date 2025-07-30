function methodLogger(originalMethod: any, context: any){
  console.log("Decorator Invoked");

  function replacementMethod(this:any, ...args:any[]){
    console.log(args);
    console.log(this);
    console.log("Invocation Started');
    const result = originalMethod.call(this, ...args);
    console.log("Invocation Ended");
  }
  return replacementMethod;
}

class Person {
  constructor(public name: string) {}

  @methodLogger
  greet(greeting: string){
    console.log('${greeting}, ${this.name}');
  }
}

let user: Person = new Person("John");
user.greet("Hello");

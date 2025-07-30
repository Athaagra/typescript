function methodLogger(originalMethod: any, context: any){
  const methodName = context.name;

  if (context.private){
    throw new Error("Cannot decorate private property");
  }
  //runs inside the constructor
  context.addInitializer(function (this:any){
    console.log(this);
    this[methodName] = this[methodName].bind(this);
  });

  function replacementMethod(this:any, ...args:any[]){
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation Ended");
  }
  return replacementMethod;
}

class Person {
  constructor(public name:string){
    //identical of setting an initializer
    //this.greet = this.greet.bind(this)
  }

  @methodLogger
  greet(greeting:string){
    console.log(`${greeting}, ${this.name}`);
  }
}

let user: Person = new Person("John");
user.greet("Hello");

const greet = user.greet;
greet("Hi");

function methodLogger(originalMethod: any, _context: any){
  function replacementMethod(this: any, ...args: any[]){
    console.log("Invocation Started");
    const result = originalMehtod.call(this, ...args);
    console.log("Invocation Ended");
  }
  return replacementMethod;
}

function bound(_target: any, context: any){
  cont methodName = context.name;

  if(context.private){
    throw new Error("Cannot decorate private property");
  }

  context.addInitializer(function (this:any){
    this[methodName] = this[methodName].bind(this);
  });
}

class Person {
  constructor(public name:string){

  }
  @bound
  @methodLogger
  greet(greeting: string){
    console.log(`${greeting}, ${this.name}`);
  }
}

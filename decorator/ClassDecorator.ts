function adGreetMethod<T extends new (...args:any[])=> Greetable >(
  target:T,
  context:ClassDecoratorContext<T>
){
  return class extends target{
    constructor(...args:any[]){
      super(...args)
      this.greet = (greeting:string)=>{
        console.log(`$greeting},${this.name}! Have a great Day.`);
      };
    }
  };  
}

class Greetable {
  constructor(public name: string){}
  greet: (greeting:string) => void = () => {};
}


@addGreetMethod
class Author extends Greetable {
  constructor(public name: string){
    super(name);
  }

 // greet(greeting: string): void{
 //   console.log(`${greeting}, ${this.name}`);
 // }
}

const author = new Author("Mark");
author.greet("Hello");

//**** abstract Classes****
abstract class Person{
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greeting(){
    console.log(`Hello ${this.name}`);
  }
  public static nameClass(){
    return "Class name is Person";
  }
}

class RegisteredPerson extends Person{
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ){
    super();
  }
}

const person: RegisteredPerson = new RegisteredPerson(
  "John","john@email.com",988768787
);

console.log(person);
person.greeting();
console.log(Person.nameClass());

// ****interface Classes****
interface User{
  name: string;
  email: string;
  phone: number;
  greeting: () => void;
}

class RegisteredUser implements User{
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ){}
  public greeting(){
    console.log('Hello ${this.name}');
    
  }
}
// ****2nd interface Classes****
interface User{
  name: string;
  email: string;
  phone: number;
  
}
interface greeting(){
    greeting: () => void;
    console.log('Hello ${this.name}');
}

class RegisteredUser implements User,greeting{
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ){}
  public greeting(){
    console.log('Hello ${this.name}');
}
  
}


class Person {
  private _age?: number;
  constructor(public firstName: string, public lastname:string) {}
  public set age(age:number){
    if(age > 200 || age< 0){
      throw new Error("The age must be within the age range 0-200");
    }
    this._age = age;
  }

  public get age(){
    if(this._age === undefiined){
      throw new Error("The age property is not defined");
    }
    return this._age;
  }
  public get fullname() {
    return `${this.firstName} ${this.lastname}`;
  }
}

const john: Person = new Person("John","Doe");
const mark: Person = new Person("Mark","Doe");
john.age = 45;
console.log(john.age);
console.log(john.fullname);

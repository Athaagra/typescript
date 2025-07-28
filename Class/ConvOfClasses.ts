class Person {
  public fullname: string;
  constructor(
    public firstName: string,
    public lastname: string,
    public age: number
  ){
    if (age > 200 || age < 0){
      throw new Error("The age must be within the age range 0-200");
    }
    this.fullname = `${this.firstName} ${this.lastname}`;
  }
}

const john: Person = new Person("John","Doe", 45);

console.log(john.fullname);

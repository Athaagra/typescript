class User {
  //public name: string; the real constructor
  //readonly email: string; the real constructor 
  //lastname?: string; the real constructor
 // private phone: number; the real constructor

  constructor(public name: string, public readonly email: string,private phone: number,public lastname: string) // the shorthand constructor
  {
   // this.name = name; the real constructor
   // this.email = email; the real constructor
   // this.lastname = lastname; the real constructor
   // this.phone = phone; the real constructor
  }
  public greet(): string {
    return `Hello ${this.name}`;
  }
}

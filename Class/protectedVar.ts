class User {
  public name: string;
  readonly email: string;
  lastname?: string;
  
  constructor(name: string, email: string, lastname?:string){
    this.name = name;
    this.email = email;
    this.lastname = lastname;
  }

  public greet(): string {
    return `Hello ${this.name}! I am the admin`;
  }
  public printPhone(){
    console.log(this.phone);
  }
}

class Admin extends User{
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    phone: number,
    usersReporting: number,
    lastName?:string
  )
  {
    super(name, email, phone, lastName);
    this.usersReporting = usersReporting;
  }
  public greet(): string {
    return `Hello ${this.name}! I am the admin`;
  }
  public printName(){
    console.log(this.name);
  }

  protected printNumber(){
    console.log(this.phone);
  }

  public useProtectedPhone() {
    this.printNumber();
  }
}
const user: User = new User("John","john@email.com");
const admin: Admin = new Admin("Mark","mark@email.com", 11);

console.log(user.phone);
console.log(admin.phone);
console.log(admin.name);
admin.printNumber();
admin.useProtectedPhone();
user.printPhone();

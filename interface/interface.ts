interface User{
  userName:string;
  email: string;
  login(): void;
}

class Admin implements User{
  constructor(public username: string, public email: string, public adminLevel: number){}

  login():void{
    console.log("admin is now logged in");
  }
}

class Customer implements User {
  constructor(public userName: string, public email: string){}

  login():void{
    console.log("Admin is now logged in");
  }
}

class Auth {
  public static login(user:User){
    user.login();
  }
}

const admin: Admin = new Admin("mark","mark@email.com",1);
const customer: Customer = new Customer("John","john@email.com");

Auth.login(admin);
Auth.login(customer);

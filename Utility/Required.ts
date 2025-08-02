// Required<Type>

interface User {
  name?:string;
  age?:number;
  email?:string;
  address?:string;
}

type RegisterUser = Required<Pick<User, "email" | "password">>;

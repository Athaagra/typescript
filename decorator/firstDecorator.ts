// Creating a Decorator
function DoSomething(){
    // do something with 'target'...
}

//Using a Decorator
@DoSomething
class User{
  // members of the class
}

//How a decorator can be used property
class User{
  @DoSomething
  name: string;
}

//How a decorator can be used in method
class User{
  @DoSomething
  signIn(){}
}

//How a decorator can be used in properties
class User {
  constructor(
    @DoSomething public name: string
  ){}
}
//mutators
class User{
  @DoSomething
  public get fullname(){}
}


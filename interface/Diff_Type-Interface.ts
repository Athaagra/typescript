// ***Type***
type User = {
  name: string;
};

type AdminUser = {
  isAdmin: boolean;
};

// Intersection Type
const userAndAdmin: User & AdminUser = {
  name: "John",
  isAdmin: true,
};

// Union Type
const userOrAdmin: User | AdminUser = {
  name: "Mark",
};

// Tuples 
type ResponseTuple = [string, number];


// ***Interface****
interface Person {
  name: string;
}

interface Person {
  lastname: string;
}

const person: Person = {
  name: "John",
  lastname: "Doe".
};


// 2nd Approach
interface Name{
  name: string;
}

interface LastName{
  lastName: string;
}

interface Person extends Name, LastName {
  constructor(
    public name: string,
    public lastName: string
  ){}
}

const person: Person = {
  name: "John",
  lastName: "Doe",
};

const person: Person = new Person(name:"John",lastName:"Doe");

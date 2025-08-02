const user = {
  id: 1,
  name: "Alice",
  age: 30,
};

type UserType = typeof user;

const newUser: UserType = {
  id: 1,
  name: "Bob",
  age: 30,
};

function getUser() {
  return {
    id:1,
    name: "Alice",
    age: 30,
  };
}
// Now the typescript understand that supoose to be a type that has an object with property id,name,age
// and whatever type of return by this type of function this type that will be created to a new type for you
type ReturnUserType = ReturnType<typeof getUser>;

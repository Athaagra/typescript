const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
Direction.Left=5;

enum Direction2 {
  Up=1,
  Down,
  Left,
  Right,
}

console.log(Direction2.Right);

enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Role;
}

const peron: Person = {
  name:"John",
  email:"john@email.com",
  password: "123df",
  role: Roles.ADMIN,
};

console.log(person);


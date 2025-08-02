// Record<Keys, Types>

type Roles = "author" | "editor" | "researcher";

interface User {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title:string;
  content: string;
  contributors: Record<Roles, User>;
}

const article:={
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Duis est urn, eleifend at malesuada id, suscipit eu",
  contributors: {
    author: {name: "John", email:"john@email.com", age:32},
    editor: {name: "Frank", email:"frank@email.com", age:36},
    researcher: {name:"Mark", email:"mark@email.com", age:36},
    
  },
};

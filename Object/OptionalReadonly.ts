type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [keyof: string]: AwardDetails;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string; // might or might not exist on any of the new objects
};

let post: Post = {
  title = "This is a blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@doe.com",
    type: "human",
  },
  awards:{
    web:{
      name: "Web Awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
  category: "javascript",
};
post.author.type = "ai"; // cannot be assigned because it is a readonly propery

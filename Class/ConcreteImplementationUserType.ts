type Identifiable = {
  id: number;
};

class Repository<T extends Identifiable>{
  private items: T[] = [];

  add(item: T){
    this.items.push(item);
  }

  getByid(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  removeId(id: number): void {
    this.items = this.items.filter((item) => item.id === item.id);
  }
}

type User = Identifiable & {
  name: string;
  email: string;
};

type Book = Identifiable & {
  title: string;
  ISBN : number;
};

const usersRepository = new Repository<User>();
const booksRepository = new Repository<Book>();

usersRepository.add({
  id: 1,
  name: "John",
  email: "john@email.com",
});

booksRepository.add({
  id: 1,
  title: "Harry Potter",
  ISBN: 124678,
});

console.log(usersRepository.getByid(1));
console.log(booksRepository.getAll());
})

const book = {
  title: 'the title',
  pages: 300,
  authors: 'John',
};

const book2 = new Object();
book2.title = 'Book2 title';
book2.pages = 250;
book2.author = 'Mark';

console.log(book2);

Object.defineProperty(book,'title',{
  value:'This is the title of the book',
  writeable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(book,'authro',{
  value: 'John',
  writeable: false,
  enumerable: true,
  configurable: true,
});
book.author = 'Mark';

console.log(book);

class book {
  constructor(title, description, author){
    this.title = title;
    this.description = description;
    this.author = author;
  }
}



class library {
  constructor() {
    this.Book = [];
  }

  addBook(bookinfo) {
    const b1 = new book(bookinfo.title, bookinfo.description, bookinfo.author);
    this.Book.push(b1);
  }

  getBooks() {
    return this.Book;
  }

  getId(id){
    let index = 0;
    while (index < this.Book.length && this.Book[index].title !== id) {
      index += 1;
    }
    return index;
  }

  removeBookById(id) {
    const index = this.getId(id);
    if (typeof(this.Book[index]) !== undefined) {
      this.Book.splice(index, 1);
    }
  }

  getBookById(id) {
    const index = this.getId(id);
    return this.Book[index];
  }

  updateBookById(id, bookinfo) {
    const index = this.getId(id);
    const b1 = new book(bookinfo.title, bookinfo.description, bookinfo.author);
    this.Book[index] = b1;
  }
}


const l1 = new library();

l1.addBook({title : 'a', description : 'muito interessante', author : 'diego'});
l1.addBook({title : 'b', description : 'nada interessante', author : 'jorge'});

let books = l1.getBooks();
console.log(books[0], books[1]);

l1.removeBookById('c');
l1.removeBookById('b')

books = l1.getBooks();

console.log(books);
console.log(l1.getBookById('a'));

l1.updateBookById('a', {title : 'c', description : 'talvez seja interessante', author : 'adamastor'});

console.log(books);
console.log(l1.getBookById('c'));


interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[]

  constructor(){
    this.books = []
  }
  public addBook(newBook: Book){
      this.books.push(newBook)
  }
  public getBookDetails(isbn: string): Book | string{
    const foundBook = this.books.find((item)=>{
      return item.isbn === isbn
    })
    if(!foundBook){
      return "Invalid data"
    }
    return foundBook
  }
}

class DigitalLibrary extends Library {
  readonly website: string;
  constructor(website: string){
    super()
    this.website = website
  }

  public listBooks(): string[]{
    const allBooks: Book[] = (this as any).books
    return allBooks.map(item=>{
      return item.title
    })
  }
}

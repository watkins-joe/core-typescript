import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { Shelf } from "./Shelf";

let bookShelf: Shelf<Book> = new Shelf<Book>();

bookShelf.addItemToCatalog(new Book());

// @ts-expect-error
bookShelf.addItemToCatalog(new Magazine());
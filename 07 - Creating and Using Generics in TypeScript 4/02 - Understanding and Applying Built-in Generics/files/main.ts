import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { Shelf } from "./Shelf";

let bookShelf: Shelf<Book> = new Shelf<Book>();

bookShelf.addItemToCatalog(new Book());

bookShelf.addItemToCatalog(new Magazine());
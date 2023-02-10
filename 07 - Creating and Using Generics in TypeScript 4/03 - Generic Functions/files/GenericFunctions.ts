import { Book } from "../../02 - Understanding and Applying Built-in Generics/files/Book";

function checkOut<T>(item: T): T {

    let availableItem: T = getItemFromDB(item);

    if (availableItem) {
        // check out available item for customer
    }

    return item;
}

function getItemFromDB<T>(item: T): T {
    return item
}

const someBook = new Book();



checkOut<Book>(someBook);


checkOut(someBook);



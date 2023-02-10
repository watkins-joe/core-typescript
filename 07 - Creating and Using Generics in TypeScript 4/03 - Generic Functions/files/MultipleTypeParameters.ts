import { Book } from "../../02 - Understanding and Applying Built-in Generics/files/Book";
import { Student } from "../../02 - Understanding and Applying Built-in Generics/files/Student";

function checkOut<T, V>(item: T, customer: V): T {
  let availableItem: T = getItemFromDB(item);
  let activeCustomer: V = getCustomerFromDB(customer);

  if (availableItem && activeCustomer) {
    // check out item for customer
  }

  return item;
}

function getCustomerFromDB<V>(customer: V): V {
  return customer;
}

function getItemFromDB<T>(item: T): T {
  return item;
}

const someBook = new Book();
const someStudent = new Student();

checkOut<Book, Student>(someBook, someStudent);

checkOut(someBook, someStudent);

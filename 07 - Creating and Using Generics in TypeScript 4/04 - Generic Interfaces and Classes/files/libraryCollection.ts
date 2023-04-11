export interface LibraryCollection<T> {

    _items: T[];
    addItemToCatalog(newItem: T): void;
    removeItemFromCatalog(oldItem: T): void;

}

let titleCollection: LibraryCollection<string> = {

    _items: ['Winnie the Pooh', 'Curious George'],
    addItemToCatalog: s => console.log(`Added item ${s}`),
    removeItemFromCatalog: s => console.log(`Removed item ${s}`)

}
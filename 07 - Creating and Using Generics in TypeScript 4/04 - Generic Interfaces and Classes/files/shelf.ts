import { LibraryCollection } from "./libraryCollection";

export class Shelf<T> implements LibraryCollection<T> {
    
    _items: T[]
    
    addItemToCatalog(newItem: T): void {
        // add code here to catalog item
    }

    removeItemFromCatalog(oldItem: T): void {
        
    }

}
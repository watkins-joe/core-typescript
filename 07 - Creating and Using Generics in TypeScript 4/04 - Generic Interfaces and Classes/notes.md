stack data structure as example

last in, first out

```ts
interface DataStructure<T> {
  push(newItem: T): void;
  pop(): T;
}

class Stack<T> implements DataStructure<T> {
  items: T[] = [];

  push(newItem: T): void {
    this.items.push(newItem);
  }

  pop(): T {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }
}

let myNumberStack = new Stack<number>();

myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);

console.log(myNumberStack.pop()); // 3
console.log(myNumberStack.peek()); // 2
console.log(myNumberStack.pop()); // 2
console.log(myNumberStack.pop()); // 1
```

Generic classes are ONLY generic over their instances.

Since static members and methods apply to the class itself and not INSTANCES of the class, you CANNOT use generics on static members!!

The benefits of applying type constraints to classes are the same as the benefits of applying them to functions!

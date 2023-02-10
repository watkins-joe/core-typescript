the checkout function accepts a single type parameter of type `T` inside the angle brackets just after the function name

the type you specify will be used for every instance of `T` inside the function

type inference works great with generics just like non-generics

if i didn't include the return type on the function, the typescript compiler would have inferred the return type based on the fact that im returning a value it already knows to have the type `T`

in order to use it, we write the code:

```ts
checkOut<Book>(someBook);
```

![function call with type](./images/wType.png)

we are explicitly adding the type to the function call, but again, typescript could infer that based on the type of the parameter passed to the function since the compiler knows it must also have the type `T`

```ts
checkOut(someBook);
```

![function call without type](./images/woType.png)

multiple type params

you are not limited to a single type parameter on a function

if we have more than one type parameter, you separate them with a comma in the angle brackets

the letter you assign to additional parameters is up to you

to call the function, we add a second type to the angle brackets when the function is invoked

```ts
checkOut<Book, Student>(someBook, someStudent);
```

![function call with multiple type](./images/wMTypes.png)

again we are adding the types to the function call, but the compiler could still infer the types as well

```ts
checkOut(someBook, someStudent);
```

![function call without multiple types](images/woMTypes.png)

a single type is the most common in functions.

with each additional type, the level of abstraction goes up, and practicality goes down

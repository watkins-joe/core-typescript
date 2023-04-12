i'll learn

1. differentiating between types
2. conditional types
3. genreating new typese from existing types
4. extending objects with symbols
5. working with tuples
6. breaking classes down with Mixins
7. separating structure from looping with iterators
8. dealing with sequences that change over time with generators

## three levels of differentiation

1. `typeof`
   1. compares data types (number vs string.ect)
2. `instanceof`
   1. checks if a certain variable/argument.ect is an instance of a certain class
3. user defined type guards
   1. most powerful of all
   2. if you dont have a value type AND you dont have a class instance and you want to differentiate between different types, use user defined type guards.
   3. the return type is an assertion that a variable that was passed to it is of a specific type, and that type does not have to be a particular class or type, it could be any type.

### example of 3:

```ts
function isImageLayer(layer: Layer): layer is ImageLayer {
  return layer.type === LayerType.Image;
}

// ...

function setSrcOnSelection(layers: Layer[], value: string) {
  layers.forEach((layer) => {
    if (isImageLayer(layer)) {
      setSrc(layer, value);
    }
  });
}
```

## basic conditional types

when we use conditional types, we always use generics.

in this scenario, we said if T extends TextLayer, then this meta parameter should be of type `TextMeta`, otherwise `ImageMeta`.

example:

```ts
function setMeta<T extends TextLayer | ImageLayer>(
  layer: T,
  meta: T extends TextLayer ? TextMeta : ImageMeta
) {
  layer.meta = meta;
}

setMeta(textLayer, {
  fontFoundry: "Own foundry",
  licenseExpiration: new Date(),
});

setMeta(imageLayer, {
  format: "jpg",
  origin: "Download",
});
```

you combine generics with ternary statements to go and build relationships between types

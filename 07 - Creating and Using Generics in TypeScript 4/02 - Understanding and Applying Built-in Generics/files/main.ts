function shortenArray<T>(data: Array<T>, amountToShorten: number) {
  return data.splice(amountToShorten, data.length);
}

let stringArray: string[] = ["Visual Basic", "C++", "TypeScript", "JavaScript"];




let fewerLanguages = shortenArray([1, 2, 3], 2);

console.log(fewerLanguages);

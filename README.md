
# Randomize-it !

<em>Randomize-it is a random-filled `npm` package!</em>

# Documentation

>  *Examples are at the bottom of this page.*

###  Methods
|Name  | Description| Arguments | Return type|
|--|--|--|--|
| `randomInt(min : number, max : number)` |  Get a random `number` from the specified `min` and `max` arguments. | `min:` The minimum number to start random choosing from.<br>`max:` The maximum number to end the random choice.| `number`
| `randomArray(arr: Array<any>)`| Get a random item from a `Array`.|`arr:` The `Array` item to get the item from.| `any`|
| `randomMultipleArray(arr : Array<any>, count : number)`| Get multiple random items from an `Array`, based on the `count`.| `arr:` The array to get all the items from.<br>`count:` The amount of random items returned from the array, as an array.| `Array<any>`|
| `randomFromString(str : string, from : number, to : number)`| Get a random string from the specified string (`str`), and the string's index based on the `from` and `to` arguments.| `str:` The string to cut out the string.<br>`from:` The number to indicate the `index` of the letter to start the extraction from.<br>`to:` The number to indicate the `index` of when to STOP cutting the string out.| `string`|
| `randomUpper(str : string, count : number)`| randomly `toUpperCase()` characters in a string, the amount varies on the `count`.| `str:` The string to randomly uppercase characters.<br>`count:` The number of times to repeatedly uppercase letters in the string. | `string`|
| `randomLower(str : string, count : number)`| randomly `toLowerCase()` characters in a string, the amount varies on the `count`.| `str:` The string to randomly lowercase characters.<br>`count:` The number of times to repeatedly lowercase letters in the string. | `string`|




### Examples:

JavaScript:
```js
const RandomizeIt = require("randomize-it")
const random = new RandomizeIt()
// OR import methods from the package with destructoring:
// const { randomUpper() } = require("randomize")

const  testArr = ["Hello 1!", "Sup 2", "bruh", "test", "hello!!!#!@#"]

console.log(random.randomUpper("Hello", 1)) //=> returns a string with random letters uppercased. change the second argument (1) to a higher or lower number to recieve multiple characters uppercased.
console.log(random.randomLower("Hello", 1)) //=> same thing but lowercase lol
console.log(random.randomMultipleArray(testArr, 2)) //=> returns an array of random items inside of "testArr" array.
console.log(random.randomArray(testArr)) //=> Returns a random item from the array, such as "Hello 1!" could be an example. Remember: its all random!

```
Typescript:
```ts
import RandomizeIt from "randomize-it"
// or:
// import * as Randomize from "randomize"
// const random = new Randomize();

const random = new RandomizeIt()

// OR import methods from the package with destructoring:
// import { randomUpper() } from "randomize";

const  testArr : Array<any> = ["Hello 1!", "test"];

console.log(random.randomUpper("Hello", 1)) //=> returns a string with random letters uppercased. change the second argument (1) to a higher or lower number to recieve multiple characters uppercased.
console.log(random.randomLower("Hello", 1)) //=> same thing but lowercase lol
console.log(random.randomArray(testArr)) //=> Returns a random item from the array, such as "Hello 1!" could be an example. Remember: its all random!
console.log(random.randomMultipleArray(testArr, 2)) //=> returns an array of random items inside of "testArr" array.
```

# Notes
I might update this more, but I plan to update it soon. Please commit and add a PR if you want to add more things! It would be epic to have like 20 random methods haha 

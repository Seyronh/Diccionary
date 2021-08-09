![Author](https://raster.shields.io/static/v1?label=Author&message=Seyron#5532&color=RED?style=flat&logo=appveyor)

## Install
Before installing it you need to install [Node.js](https://nodejs.org/en/download/)
The install is executed using the [npm install command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install diccionary --save
```
## Constructor
The constructor need one argument
* lowercase: True or False (this just convert text to lowercase before adding it to the diccionary so hello and HeLlO will be the same word)

## Properties
* maxid:Max number assigned to a word
* list:The full vocabulary with the words associated numbers
* count:The full vocabulary with the times every word have been added
* maxcount:The most added word

## Methods

### add
This function add words/sentences to the dictionary(if the word is already in the dictionary it will be counted)

### remove
This function remove words/sentences of the dictionary

### convert
This function convert words/sentences to numbers(the number is the associated number in the dictionary in case it isn't in the dictionary it will be a 0)

### convertnormalized
This function use the already explained convert function but then it divide the number of every word with the max number on the dictionary so the numbers will be in the range 0-1

## Example
```js
const diccionaries = require('diccionary')
const diccionary = new diccionaries(true) //true => it will be lowercase
let exampletext = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.'
diccionary.add(exampletext) //In this case Nory and Nory's will be different words and this also applies to Catholic - Catholic,
console.log(diccionary.list)
/*
Console Output:
{
  nory: 1,
  was: 2,
  a: 3,
  catholic: 4,
  because: 5,
  her: 6,
  mother: 7,
  'catholic,': 8,
  and: 9,
  'nory’s': 10,
  father: 11,
  his: 12,
  or: 13,
  had: 14,
  'been.': 15
}
*/
console.log(diccionary.maxid) //Console Output:15
console.log(diccionary.count)
/*
Console Output:
{
  nory: 1,
  was: 6,
  a: 6,
  catholic: 3,
  because: 3,
  her: 3,
  mother: 3,
  'catholic,': 3,
  and: 2,
  'nory’s': 1,
  father: 2,
  his: 1,
  or: 1,
  had: 1,
  'been.': 1
}
*/
console.log(diccionary.maxcount)
/*
In this case its return "was" because its the first element in the list with the highest value
Console Output:{ word: 'was', counts: 6 }
*/

console.log(diccionary.convert(exampletext))
/*
Console Output:[
  1,  2, 3, 4,  5,  6,  7, 2,  3,  8,
  9, 10, 7, 2,  3,  4,  5, 6, 11,  2,
  3,  8, 9, 6, 11,  2,  3, 4,  5, 12,
  7,  2, 3, 8, 13, 14, 15
]
*/
console.log(diccionary.convertnormalized(exampletext))
/*
Console Output:[
  0.06666666666666667, 0.13333333333333333,
                  0.2, 0.26666666666666666,
   0.3333333333333333,                 0.4,
   0.4666666666666667, 0.13333333333333333,
                  0.2,  0.5333333333333333,
                  0.6,  0.6666666666666666,
   0.4666666666666667, 0.13333333333333333,
                  0.2, 0.26666666666666666,
   0.3333333333333333,                 0.4,
   0.7333333333333333, 0.13333333333333333,
                  0.2,  0.5333333333333333,
                  0.6,                 0.4,
   0.7333333333333333, 0.13333333333333333,
                  0.2, 0.26666666666666666,
   0.3333333333333333,                 0.8,
   0.4666666666666667, 0.13333333333333333,
                  0.2,  0.5333333333333333,
   0.8666666666666667,  0.9333333333333333,
                    1
]
*/
```


***Created by: Discord Safe***

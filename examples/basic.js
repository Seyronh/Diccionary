const diccionaries = require('./index.js')
const dictionary = new diccionaries(true) //true => it will be lowercase
let exampletext = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.'
diccionary.add(exampletext)
console.log(dictionary.list)
console.log(dictionary.maxid)
console.log(dictionary.count)
console.log(dictionary.maxcount)
console.log(dictionary.convert(exampletext))
console.log(dictionary.convertnormalized(exampletext))

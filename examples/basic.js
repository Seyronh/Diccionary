const diccionaries = require('./index.js')
const diccionary = new diccionaries(true) //true => it will be lowercase
let exampletext = 'Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.'
diccionary.add(exampletext)
console.log(diccionary.list)
console.log(diccionary.maxid)
console.log(diccionary.count)
console.log(diccionary.maxcount)
console.log(diccionary.convert(exampletext))
console.log(diccionary.convertnormalized(exampletext))

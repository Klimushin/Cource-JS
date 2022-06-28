'use strict'

// Filter

const names = ['Ivan', 'Seroga', 'Ann', 'Ksenia', 'Voldemar']

const shortNames = names.filter(name => name.length <= 6)

console.log(shortNames)

// MAP

let answers = ['IvAn', 'SeROga', 'ANn', 'KsenIa', 'VoldemaR']

answers = answers.map(name => name.toLocaleLowerCase())

console.log(answers)

// Every, Some

const arr = [4, 'qwe', 'sert']

const arr2 = [4, 6, 8]

console.log(arr.some(item => typeof(item) === 'number'))

console.log(arr2.every(item => typeof(item) === 'number'))


// Reduce

const arr3 = [4, 5, 7, 9, 4, 2]

const res = arr3.reduce((sum, current) => sum + current)

const res2 = arr.reduce((sum, current) => `${sum}, ${current}`)

console.log(res)
console.log(res2)


obj = {
    ivan: 'user',
    ann: 'user',
    dog: 'animal',
    cat: 'animal'
}

const key = Object.keys(obj)
const val = Object.values(obj)
console.log(key, val)
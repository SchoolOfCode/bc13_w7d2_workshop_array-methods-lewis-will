let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
/*
let three = 3
let five = 5
let sixty = 60
let ninety = 90
*/

/*
const multipleThree = someNumbers.some((number) => {
    // return number % three === 0 || number % five === 0 || number % sixty === 0 || number % ninety === 0
    // if (number % three === 0) three = true
    // if (number % five === 0) five = true
    // if (number % sixty === 0) sixty = true
    // if (number % ninety === 0) ninety = true
    return number % three === 0;

})

const multipleFive = someNumbers.some((number) => {
    return number % five === 0;
})

const multipleSixty = someNumbers.some((number) => {
    return number % sixty === 0;
})

const multipleNinety = someNumbers.some((number) => {
    return number % ninety === 0;
})
*/

const Three = (num) => num % 3 === 0
const Five = (num) => num % 5 === 0
const Sixty = (num) => num % 60 === 0
const Ninety = (num) => num % 90 === 0
    


console.log(someNumbers.some(Three))
console.log(someNumbers.some(Five))
console.log(someNumbers.some(Sixty))
console.log(someNumbers.some(Ninety))


/*
console.log(multipleThree)
console.log(multipleFive)
console.log(multipleSixty)
console.log(multipleNinety)
*/


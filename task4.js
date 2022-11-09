let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

const checkMultiple7 = sevenTimesTable.every((number) =>{
    return number % 7 === 0;
})

const checkMultiple77 = seventySevenTimesTable.every((number) => {
    return number % 77 === 0
})

const notMultiple77 = seventySevenTimesTable.find((number) => {
    return number % 77 != 0;
})

const notMultiple77Index = seventySevenTimesTable.findIndex((number) => {
    return number % 77 != 0;
})

console.log(checkMultiple7)
console.log(checkMultiple77)
console.log(notMultiple77)
console.log(notMultiple77Index)
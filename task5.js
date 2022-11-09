let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

console.log(queue)
queue.push('catHorse')
console.log(queue)
queue.shift()
console.log(queue)
queue.unshift('owlDonkey')
console.log(queue)
queue.pop('catHorse')
console.log(queue)
const emergency = queue.slice(4,5)
console.log(queue, emergency)
queue = queue.concat(unofficialQueue)
console.log(queue)


const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

let sortedBrooms = broomCupboard.sort((a,b) => a-b)
console.log(sortedBrooms)

let sortedPotions = potions.sort((a, b) => b.shelf-a.shelf)
console.log(sortedPotions)

let sortedStudents = students.sort((a,b) => a.split(' ')[1].localeCompare(b.split(' ')[1]))
console.log(sortedStudents)
console.log(students[0].split(' ')[1].localeCompare(students[1].split(' ')[1]))


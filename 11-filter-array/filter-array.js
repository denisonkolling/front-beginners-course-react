
const numbers = [2, 4, 6, 8, 12, 43, 23]

function isEven(num) {
  if (num % 2 == 0){
    return true
  } else {
    false
  }
}

const newValues = numbers.filter(isEven)

console.log(newValues)

//----------------------------------------------------------

const newValuesArrowFunction = numbers.filter((num)=> num % 2 == 0)

console.log(newValuesArrowFunction)

const newValuesArrow = numbers.filter((num)=> num % 2 == 1)

console.log(newValuesArrow)

//----------------------------------------------------------

const frontBeginners = [
  { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35 },
  { name: 'Joãzinho do pastel', age: 32, title: 'PL', test: 56 },
  { name: 'Harry do Potter', age: 80, title: 'SR', test: 90 },
  { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
  { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
  { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]

const titlePL = frontBeginners.filter((person) => person.title === 'PL')

console.log(titlePL)

//------------------------------------------------------------

const agePeople = frontBeginners.filter((person) => person.age >= 50)

console.log(agePeople)

/* Avancado em conjunto com .map */

const titlePlNames = frontBeginners
  .filter((person) => person.age >=50)
  .map((item) => item.name)
  // .some((name) => name === 'Juvenal')
  console.log(titlePlNames)

//------------------------------------------------------------

const array = ["bernardo", "amanda", "cecilia", "denis", "estevao"];
const comecam_com_a = array.filter(str => str.startsWith("a"));
console.log(comecam_com_a); 
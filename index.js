const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const index = 0;
  const cappedTutorials = tutorials.map((element) => {
    const splitElement = element.split(' ')
    const capSplitElement = splitElement.map((element) => {
      return element.charAt(index).toUpperCase() + element.substring(1)
    }) 
    const backToString = capSplitElement.join(' ')
    return backToString   
  })
  return cappedTutorials
}

titleCased()
const string = "This is a string"

const newString = string.split(' ')

console.log(newString)

const index = 0

const cappedNewString = newString.map((element) => {
  element.charAt(index).toUpperCase()
  return element.charAt(index).toUpperCase() + element.substring(1)
})

const stringCapped = cappedNewString.join(' ')
console.log(stringCapped)


// const titleCased = () => {
//   const index = 0;
//   const arrayTutorials = tutorials.map((element) => element.split(' '))
//   return arrayTutorials
// }
// console.log(titleCased())

// const cappedElements = arrayTutorials.map((element) => {
  //   return element.charAt(index).toUpperCase()     
  // })
  // return cappedElements 
  // tutorials.map((element) => {
  //   element.split(' ')
  //   console.log(arrayTutorials)
  // })

// let mystring = "onestring"
// let mystring1 = "anotherstring"

// const vowelCounter = (string) => {
//   let vowelCount = 0
//   for (i=0; i<=string.length; i++) {
//     if (mystring[i] == "a") {
//       vowelCount += 1
//     }
//     else if (mystring[i] == "e") {
//       vowelCount += 1
//     }
//     else if (mystring[i] == "i") {
//       vowelCount += 1
//     }
//     else if (mystring[i] == "o") {
//       vowelCount += 1
//     }
//    else if (mystring[i] == "u") {
//     vowelCount += 1
//     }

//   }
//   return vowelCount
// } 

// console.log(vowelCounter(mystring))
// console.log(vowelCounter(mystring1))
// for (let i = 0; i<cards_array.length; i++) {
//   if (cards_array[i] == c.id) {
//     return true
// }
// }


let array1 = [1,2,1,4,7,9,24]

const greaterThanThree = (arr) => {
  let arr2 = []
  for (let i=0; i<=arr.length; i++) {
    if (arr[i] > 3) {
      arr2.push(array1[i])
    }
  }
  return arr2
}

console.log(greaterThanThree(array1))

const filter = (arr, func)=>{
  console.log(func(arr))
}
filter(array1, greaterThanThree)

const greaterThanThree = (arr) => {
  let arr2 = []
  for (let i=0; i<=arr.length; i++) {
    if (arr[i] > 3) {
      arr2.push(array1[i])
    }
  }
  return arr2
}

const map = (arr, func)=>{
 // you can use forEach/for loop
 for (let i=0; i<arr.length)
}

const forEach = (arr, func)=>{
// you can only use for loop
}

const filter = (arr, func)=>{
  // you can use forEach/for loop
  let results = []
  for(let i = 0; i < arr.length; i++){
      if(func(arr[i])){
          results.push(arr[i])
      }
  } 
  return results
}

const map = (arr, func)=>{
   // you can use forEach/for loop
   let results = []
   for(let i = 0; i < arr.length; i++){
     results.push(func(arr[i]))
   } 
   return results
}

const forEach = (arr, func)=>{
   for(let i = 0; i < arr.length; i++){
     func(arr[i])
   } 
}
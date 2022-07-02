//function
function sum(a, b) {
 return a + b;
}
console.log(sum(16,9))
let c = sum(10,29)
console.log(c)

//arrow function
let sum = (a, b) => {
  return a + b;
}
console.log(sum(16,9))

//callblacks
let sum = (a,b, callblacks) => {
  let tong = a + b
  setTimeout(() => {
    callblacks(tong)
  }, 5000)
  
}   

let print = (message) =>
{
  console.log("tong =",message)
}

sum(6,9,print)


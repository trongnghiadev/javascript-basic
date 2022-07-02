// for loops 
let arr = ['nghia', 'nghia1', 'ngocanh','ngocanh1'];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i].length % 2 == 0 )  console.log(arr[i]);
   
// };  


// while loops
// let i = 0;
// while(i < arr.length)
// {
//     console.log(arr[i])
//     i++;
// }


// break

// for(let i = 0; i < arr.length; i++){
//     console.log('i =', i)
//     if(arr[i] === 'nghia1' ) {
//         console.log(arr[i]);
//         break;
//     }
  
// };  


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 'nghia1' ) {
//         console.log(arr[i]);
//     }
//     console.log('i =', i)
// };  



// switch case
let day = "";
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  };

  console.log(day)
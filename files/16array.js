let color = ["red", "blue","green", "orange", "purple", "yellow", "white"];

// console.log(color.splice());
// console.log(color.splice(2));

// here the element from further index 2
// will be spliced and shown as output but in return 
// now the color will show only red, blue , green


console.log(color.splice(2,3));



// the key deference between slice and 
// splice is splice make changes in the string 
// and remove or delete the element in the string 
// and slice dont
let cars1 = ["audi", "bmw", "mercedese", "rollsroyce"];

console.log(cars1.indexOf("yellow"));      // -1 (not found)
console.log(cars1.indexOf("audi"));        // 0
console.log(cars1.indexOf("rollsroyce"));  // 3
console.log(cars1.indexOf("BMW"));         // -1 (case-sensitive)


console.log(cars1.includes("BMW")); 
console.log(cars1.includes("red")); 


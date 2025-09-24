//create a function that return the sum 
// of number from 1 to n

function sum(n){
    let sum = 0;
    for (let i = 1; i<=n; i++){
    sum += i;
    }
    return sum;

}

console.log(sum(9));
sum(9);

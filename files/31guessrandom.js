//user ender a maximum number and this program will generate a random 
//number between 0 to the maximum number and the user have to guess it

const max = prompt("enter the max number");
const random =  Math.floor(Math.random() * max)+1;

let guess = prompt("guess the number");

while(true){
    if (guess == random){
        console.log("you are right , you won");
        break;
    }
    if (guess == "exit"){
        console.log("oop!s you quit");
        break;
    }
    else if( random > guess){
        console.log("you guess small");
        guess = prompt("guess the number"); 
    }

    else if( random < guess){
        console.log("you guess big");
        guess = prompt("guess the number"); 
    }

    else{
        console.log("try try but dont cry");
        guess = prompt("guess the number"); 
    }
};

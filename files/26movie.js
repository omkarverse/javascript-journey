// let favmovie = ("avatar");

// let guess = prompt("enter the name");

// if ( guess == favmovie){
//     console.log("you are correct!");
// }
// else{
//     console.log("you are incorrect");
// }



const favmovie = "avatar";

let guess = prompt("Enter the name");

while (guess !== favmovie && guess !== "exit") {
    guess = prompt("Wrong, try again (or type 'exit' to quit):");
}

if (guess === favmovie) {
    console.log("Correct!");
} else if (guess === "exit") {
    console.log("Exited");
}

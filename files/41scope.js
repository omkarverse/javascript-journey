function highvaluescope(func, count){
    for(let i = 1; i<=count; i++){
        func()
    }
}

let greet = function(){
    console.log("hello");
}


highvaluescope(greet, 100);
//this program will call the greet function 100 times 

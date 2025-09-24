let str = ["hi", "my", "self"];//global scope

function concat(str){
    let result = "";    //funtional scope
    for(i=0 ; i<=str.length; i++){
    }
}

//IF TWO SCOPE OVERLAP THEN FUNCTIONAL SCOPE WILL WIN


{
    let a = 1;
    const b = 2;
    var c = 3;
}

// console.log(a);   error
// console.log(b);  error
console.log(c);  
//{block scope does not apply to var}
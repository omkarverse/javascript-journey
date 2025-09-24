let str = ["hi", "my", "self", "omkar", "gundale"];

function concat(str){
    let result = "";    
    for(i=0 ; i<=str.length; i++){
        result += str[i];
    }

    return result;
}

console.log(concat(str));
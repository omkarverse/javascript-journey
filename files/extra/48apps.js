let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function (){
    alert("button is clicked")
}//not executed because two operation
btn.onclick = function (){
    alert("clicked")
}

let btn2 = document.querySelector("button");
console.dir(btn2);

btn2.onmouseenter = function (){
    alert("button is clicked")
}


//this is called as event in dom manupulation 
// onmousecenter is hover on button
// the onclick only perform one operation 
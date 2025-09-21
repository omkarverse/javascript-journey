function printinfo(name, age){
    console.log(`${name} ${age}`)
}

printinfo("omkar", 22)
printinfo("sujay", 21)
printinfo("sarthak")// age is undefined
printinfo(21)// the 21 is stored in the name because the javascript
// doesnt know the 21 is not a name 

//order of argument is very important

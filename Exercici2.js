'use strict'

let task = parseInt(prompt("Introduce un numero"));
let exam = parseInt(prompt("Introduce un numero"));

let student = ((num1) => {

    num1 = task + exam;

    if(num1<5){
        console.log("Has suspendido");
    }else if(num1>=5){
        console.log("Has aprobado");
    }
    return grades(num1);
});

 const grades = (data)=>{
    console.log("La nota media es:" + data/2);
 }

 student();





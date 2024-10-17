//Operatori di confronti

let num1 = 3;
let num2 = 3;

let valutazione = (num1 == num2); //TRUE

console.log(valutazione);

num1= "4"
num2 = 4

console.log(valutazione);//true

num1 = 3
num2 = 4
let valutazione1 = (num1 === num2);

console.log(valutazione1);//false

// se puede hacer con mayor, menor tambien

//OPERATORI DI CONFRONTI LOGICO

let num7 =  10;
let num8 = 20;

let num9 = 100;
let num10 = 200;

//                   F                   T         = FALSE
let confronto = (num7 >= num8 )  && ( num9 <=num10);

console.log(confronto);


//                       T            T           =TRUE  
let confronto1 = (num7<= num8) && (num9 <=num10)
console.log(confronto1);
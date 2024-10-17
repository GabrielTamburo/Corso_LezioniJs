// IF STATEMENT

let punteggio = 60;

let messaggio= "";

if (punteggio>=50){
    messaggio= "complimenti passi al livello succesivo"
}
else{ messaggio=" mi dispiace, non puoi accedere al livello succesivo"}

console.log(messaggio);


//GIOCHINO


//HARD MODE: per superare il livello i punti devono essere >= 50, e i puntiSkill >=40
let punti = 65;
let puntiSkill = 45;

if(punti >=50 && puntiSkill>=40){
    console.log("Bravo, hai superato il livello")
}
else{console.log("Mi dispiace, non hai superato il livello")};

console.log();
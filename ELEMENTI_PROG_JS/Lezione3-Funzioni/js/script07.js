function somma(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let risultato = num1 + num2;
    document.getElementById("demo").textContent=risultato;
}

function sottrazione(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let risultato = num1 - num2;
    document.getElementById("demo").textContent= risultato;
    return sottrazione;
    
}

function moltiplicazione(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let risultato = num1 * num2;
    document.getElementById("demo").textContent=risultato;
    return moltiplicazione;
     
}
function divisione(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    let risultato = num1 / num2;
    document.getElementById("demo").textContent=risultato;
    return divisione;
}
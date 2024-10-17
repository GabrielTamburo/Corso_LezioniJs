//Dato un set di 90 numeri estrai 6 numeri senza far avvenire la ripetizione dello stesso numero

//2 scelte: 1creare un array di 90 numeri; 2non creare un array di 90 numeri

let numeri = [];//Estratti

for (let i=0; i < 6; i++) {
    let numCasuale = Math.ceil(Math.random() * 90); // numero casuale da 1 a 90

    if(numeri.includes(numCasuale)){

    }else( numeri.push(numCasuale))
    }

    console.log(numeri);

//ARRAY - strtture, contenitori di elementi simili (tipo identico, valore diverso) tra di loro


//               0        1       2       3         4         5
let colori = ["bianco", "blu", "verde", "giallo", "rosso", "nero"];

//leggo il valore in una determinata posizione

console.log (colori [0]); //BIANCO
console.log (colori [4]); //rosso
console.log (colori [5]); //NERO

//voglio sapere quanto elementi ci sono nel mio ARRAY
console.log("Nel mio array ci sono: " + colori.length + " " + "colori");

//voglio l'ultimo elemento senza conoscere la posizione
console.log (colori[colori.length -1]); //nero

let coloreInesistente = colori[10];
console.log(coloreInesistente);

// Stampo l'intero array
console.log(colori);

//metodi per la manipolazione di array
colori.push("rosa");
colori.push("viola");

//Ordino alfabeticamente i colori
colori.sort();

//Ordino alfabeticamente i colori alle inverso

colori.reverse();

//elimino l'ultimo colore
colori.pop();
colori.pop();

//verificare l'esistenza di un elemto
console.log (colori.includes("viola"));
console.log (colori.includes("magenta"));


//in che indice si trova quella stringa
console.log(colori.indexOf("rosso"));


console.log(colori);

//Esempio

let frutta= ("pesca", "mela", "kiwi", "mandarino");
let verdure= ("spinaci", "broccoli", "cavolfiori", "lattuga");

//Unire i due array
let fruttaEVerdura = frutta.concat(verdure);

fruttaEVerdura.sort();

console.log(fruttaEVerdura);

// cerco una frutta in partcolare

let fruttoPreferito = "kiwi";   

if(fruttaEVerdura.includes(fruttoPreferito)){ console.log("Si, abbiamo il tuo frutto preferito, " + fruttoPreferito);}

else { (console.log("Mi spiace, non abbiamo questo frutto"));}

console.log(fruttaEVerdura);


let miaStringa = "Il martedí pomeriggio abbiamo lezione in aula 2"

console.log(miaStringa.length); //conta il caratteri spazi inclusi

//anche le stringhe sono 0-based
console.log(miaStringa.charAt(0)); //i
console.log(miaStringa.charAt(11));//p
console.log(miaStringa.charCodeAt(0)); // codice ASCII

//metodi per ricerca
console.log(miaStringa.indexOf("martedí")); // mi restituisce l'indice della partola MARTEDÍ
console.log(miaStringa.indexOf("ciao"));
console.log(miaStringa.includes("pomeriggio"));// true

console.log(miaStringa.indexOf("a"));//restituisce la prima ocorrenza
console.log(miaStringa.lastIndexOf("a"));//Ultima occorrenza




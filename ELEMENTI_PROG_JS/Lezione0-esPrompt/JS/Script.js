let nome = window.prompt("come ti chiami?");
let cognome = window.prompt("qual è il tuo cognome?")
let dataNascita = window.prompt("quando sei nato/a?")
let username = window.prompt("qui username vorrai utilizzare ?")
let password = window.prompt("inserisci una password")
let eta = (2024 - dataNascita)

let presentazione = "Ciao " + nome + " " + cognome + " sei nato/a nell " 
+ dataNascita + ", quindi hai " + eta 

document.write (presentazione)



//FOR STATEMENT
//for (inizializzazione ; condizione ; aggiornamento){
// corpo
//}

//OPERATORE DI POST/PRE INCREMENTO/DECREMENTO
let miaEta= 35;
miaEta++; // miaEta = miaEta + 1

console.log(miaEta);

let tuaEta=38;
tuaEta--;// tuaEta= tuaEta - 1

console.log(tuaEta);

/*HACER UNA LISTA DEL NUMERO 1 AL NUMERO 100, PERO CUANDO EL NUMERO ES MULTIPO DE 3 TIENE QUE APARECER Zoom al lado,
cuando el numero es multiplo de 5 tiene que aparecer "Wroom", y cuando es multipo de los dos tiene que aparecer ZoomWroom*/

for(let i= 0; i < 10; i++ ){
    console.log(i);

}

for(let i=1; i <=100; i++){
    if ( (i % 3 == 0) && (i % 5 == 0))
        {console.log(i + "ZoomWromm");
        }
    else if  (i % 3 == 0){
            console.log(i + "Zoom");}
        
    else if  (i % 5 ==0){
                console.log( i + "Wroom");
                }
    else{ console.log(i);
    }
}

    

    
    let demo = document.getElementById("demo");
   let btn = document.getElementById ("btn");

   function salutaUser(nome){
    let saluto = `Ciao ${nome}` ;
    return saluto;
   }


   
   btn.addEventListener("click", function(){
    let nomeUser = document.getElementById("nomeUser").value;
    if(nomeUser !=""){
        demo.innerHTML = "<h2>" + salutaUser(nomeUser) + "</h2>";
    }else{
        demo.innerHTML = "<p>Non hai inserito il tuo nome </p>";
    }
    nomeUser = "";
    document.getElementById("nomeUser").value = "";
    })

    
    
    // demo.innerHTML = "<h2>" + salutaUser(nomeUser) + "</h2>";
   
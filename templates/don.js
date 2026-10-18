const montant =  document.querySelector("#montant");
const boutonsMontant = document.querySelectorAll(".amount-options button");

if (montant && boutonsMontant.length > 0 ){
    boutonsMontant.forEach(function(bouton){
        bouton.addEventListener("click", function(){
            const valeur = bouton.textContent.replace("$","").trim();
            montant.value = valeur;
        });
    });
}

/////////////////////////////

const boutonDon = document.querySelector(".don-button");
const cause = document.querySelector("#cause");
const resumeDon = document.querySelector("#don-summary");

if (boutonDon && montant && cause && resumeDon){
    boutonDon.addEventListener("click", function (){
        const montantChoisi = montant.value;
        const causeChoisie = cause.options[cause.selectedIndex].text;

        resumeDon.textContent = "vous souhaitez donner " + montantChoisi + "USD pour " + causeChoisie + ".";

        //alert(JSON.stringify(montantChoisi))
    });
}
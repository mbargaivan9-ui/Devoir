function afficherCommentaire(){
    var age = parseInt(document.getElementById("age").ariaValueMax, 10);
    var message = '';
    if (age >=1 && age<=6){
        message = " vous etes un jeune enfant"
    }
    else if(age >=7 && age <=11){
        message = " Vous etes un enfant qui atteint l'age de raison."
    }
    else if(age >=12 && age <=17){
        message = " Vous etes un adolescent."
    }
    else if(age >=18 && age <=120){
        message = " Vous etes un adulte."
    }
    else{
        message= " Age invalide . Entrez un age entre 1 et 120"
    }
    document.getElementById("resultat").textContent = message ;
}
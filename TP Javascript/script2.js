document.getElementById("form-notes").addEventListener("submit",
    function (e){
    e.preventDefault();
    // empeche l'envoie classique
    // recuperation des valeurs
    let n1= parseFloat(document.getElementById("note1").value);
    let n2= parseFloat(document.getElementById("note2").value);
    let n3= parseFloat(document.getElementById("note3").value);
    //calcule de la moyenne 
    let moy=(n1+n2+n3)/3;
    // Afficher le 4e champ
    document.getElementById("moyenne").value = moy ;
});
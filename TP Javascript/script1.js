var comptClic= 0;

var elementSpan= document.getElementById("nbclic");

function nbClic(){

    comptClic++;

    elementSpan.textContent = comptClic;
 
}

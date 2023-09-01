var i = 1 ;
var score = 0;


const button = document.querySelector('button');
setInterval(function(){
var x = Math.floor(Math.random() * 100) + 1;
var y = Math.floor(Math.random() * 100) + 1;
var resultat = x + y ;
$(".x").text(x);
$(".y").text(y);
console.log(resultat)
$(".var_score").text(score);
}, 5000);



function nouveau_calcul(){ 
    var x = Math.floor(Math.random() * 100) + 1;
    var y = Math.floor(Math.random() * 100) + 1;
    let resultat = x + y;
    $(".x").text(x);
    $(".y").text(y);
    console.log(resultat);
    console.log("CALCUL");
}



button.addEventListener('click', event => {
    var valeur = document.getElementById("qte").value;
    console.log(valeur);
    if (valeur == resultat ){
        console.log("c'est bon")
        score = score + 1;
        $(".var_score").text(score);
    } else {
        score = score - 1;
        $(".var_score").text(score);
    }

    
});



var batonnets = 20;
var tour = "";
var jeu = true;

var dessiner = function()
{
    var x = "";
    var i = 0;
    while (i < batonnets)
    {
        x = x+"<div class='batonnets'></div>";
        i++;
    };
    document.getElementById("plateau").innerHTML = x;
};

var choix_joueur = function()
{
    var x = Math.random();
    if (x <= 0.5)
    {
        document.getElementById("phrase").innerHTML = "L'ordinateur joue le premier !";
        tour = "ordi";
    }
    else
    {
        document.getElementById("phrase").innerHTML = "Vous jouez le premier !";
        tour = "joueur";
    }
};

var jeu_ordi = function()
{cx
    if (batonnets === 20 || batonnets === 16 || batonnets === 12 || batonnets === 8 || batonnets === 4)
    {   
        batonnets -= 3;
        alert("L'ordinateur retire trois batonnets"); 
    }
    else if (batonnets === 19 || batonnets === 15 || batonnets === 11 || batonnets === 7 || batonnets === 3)
    {   
        batonnets -= 2;
        alert("L'ordinateur retire deux batonnets"); 
    }
    else 
    {   
        batonnets -= 1;
        alert("L'ordinateur retire un batonnet"); 
    }

    dessiner();
    finish();
    tour = "joueur";
    document.getElementById("phrase").innerHTML = "A votre tour de jouer !";
};

 var x = Math.random();
  
    if (x <= 0.33)
    {
        batonnets -= 1;
        alert("L'ordinateur retire un batonnet");
     
    }
    else if (x <= 0.66)
    {
        batonnets -= 2;
        alert("L'ordinateur retire deux batonnets");

    else
    {
        batonnets -= 3;
        alert("L'ordinateur retire trois batonnets"); 

    }
    dessiner();
    finish();
    tour = "joueur";
    document.getElementById("phrase").innerHTML = "A votre tour de jouer !";
}

var finish = function()
{
    if (batonnets < 1)
    {
        document.getElementById("phrase").innerHTML = "Partie terminée";
        document.getElementById("retire").innerHTML = "";
        if (tour === "joueur")
        {
            alert("Vous avez perdu");
            jeu = false;
        }
        else
        {
           alert("L'ordinateur a perdu");
            jeu = false;
        }
    };
};

dessiner(); //dessine les 20 batonnets
choix_joueur();
if (tour === "ordi")
{
    jeu_ordi();
}

var fonction1 = function()
{
    if (jeu)
    {
        batonnets -= 1;
        dessiner();
        finish();
        tour = "ordi";
        if (jeu)
        {
            jeu_ordi();
        }
    }
};
var fonction2 = function()
{
    if (jeu)
    {
        batonnets -= 2;
        dessiner();
        finish();
        tour = "ordi";
        if (jeu)
        {
            jeu_ordi();
        }
    }
};
var fonction3 = function()
{
    if (jeu)
    {
        batonnets -= 3;
        dessiner();
        finish();
        tour = "ordi";
        if (jeu)
        {
            jeu_ordi();
        }
    }
};


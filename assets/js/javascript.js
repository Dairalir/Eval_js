var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){

var age = 0;
var a = 0;
var b = 0;
var c = 0;

while (age <= 100) {
   age = prompt("Saisir des ages :");
   if (age < 20) 
   {
      a++;
   }
   else if (age > 40 && age <= 100)
   {
      b++;
   }
   else if (age >= 20 && age <=40)
   {
      c++;
   }
}
console.log("Les personnes de moins de 20 ans sont :"+a);
console.log("Les personnes de plus de 40 ans sont :"+b);
console.log("Les personnes entre 20 et 40 ans sont : "+c);
}

var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2(){

var nb = prompt("Saisir un nombre :"); // pas obligatoire de demander la table a l'utilisateur
var r = 0;
var i = 1;


function TableMultiplcation(nb)
{
  do
    {
      r = i * nb;
      console.log(i+" x "+nb+ " = "+ r);
      i++;
    } while (i <= 10)
}
TableMultiplcation(nb) //on appelle la fontion pour la lancer ; TableMultiplcation(2) marche aussi
}

var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3(){


var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom = prompt("Saisir un prénom :");

  if (tab.indexOf(prenom) !== -1)
  {
    tab.splice(tab.indexOf(prenom), 1);
    tab.push(" ");
  }
  else {
    window.alert("Erreur");
  }
console.log(tab);

var bouton4= document.getElementById("Id_btn4");
bouton4.addEventListener("click",clickbtn4);
}

function clickbtn4(){

var PU = parseInt(prompt("Saisir le prix unitaire :"));
var QTECOM = parseInt(prompt("Saisir la quantité :"));
var PAP = 0;
var REM = 0;
var PORT = 6;
var TOT = PU*QTECOM;

if(TOT >= 100 && TOT <= 200)
{
  REM = (TOT * 5 / 100);
}
else if (TOT > 200) 
{
  REM = (TOT * 10 / 100);
}
else 
{
  REM = 0;
}
if ( (TOT-REM) < 500)
{
  PORT = ((TOT-REM)*2/100);
}
else
{
  PORT = 0;
}
if (PORT != 0 && PORT < 6)
{
  PORT = 6;
}
PAP = (TOT-REM)+PORT;

console.log("le prix a payer est de : "+PAP);
}
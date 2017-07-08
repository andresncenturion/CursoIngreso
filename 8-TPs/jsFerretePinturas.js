/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var gradosc,gradosf;

function FahrenheitCentigrados () 
{
gradosf=document.getElementById("Temperatura").value;
gradosf=parseInt(gradosf);
gradosc=gradosf-32;
alert (gradosf+" grados Fahrenheit son "+gradosc+" grados Centigrados");	
}

function CentigradosFahrenheit () 
{
gradosc=document.getElementById("Temperatura").value;
gradosc=parseInt(gradosc);
gradosf=gradosc+32;
alert (gradosc+" grados Centigrados son "+gradosf+" grados Fahrenheit");
}

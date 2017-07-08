/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo,ancho,radio, perimetro, cal=0, cemento=0;

function Rectangulo () 
{
largo=parseInt(document.getElementById("Largo").value);
ancho=parseInt(document.getElementById("Ancho").value);
radio=parseInt(document.getElementById("Radio").value);
perimetro=(largo*2+ancho*2)*3;
alert ("Usted debe comprar "+perimetro+" metros de alambre");
}
function Circulo () 
{
largo=parseInt(document.getElementById("Largo").value);
ancho=parseInt(document.getElementById("Ancho").value);
radio=parseInt(document.getElementById("Radio").value);
perimetro=Math.PI*2*radio*3;
alert ("Usted debe comprar "+perimetro+" metros de alambre");	
}
function Materiales () 
{
largo=parseInt(document.getElementById("Largo").value);
ancho=parseInt(document.getElementById("Ancho").value);
radio=parseInt(document.getElementById("Radio").value);
cal=largo*ancho*2;
cemento=largo*ancho*3;
alert ("Usted necesita "+cal+" bolsas de cal y "+cemento+" bolsas de cemento");

}
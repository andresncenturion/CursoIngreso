/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1=0,precio2=0,precio3=0,suma=0,promedio=0,final=0;

function Sumar () 
{
precio1=document.getElementById("PrecioUno").value;
precio2=document.getElementById("PrecioDos").value;
precio3=document.getElementById("PrecioTres").value;
precio1=parseInt(precio1);
precio2=parseInt(precio2);
precio3=parseInt(precio3);
suma=precio1+precio2+precio3;
alert (suma);	
}
function Promedio () 
{
precio1=document.getElementById("PrecioUno").value;
precio2=document.getElementById("PrecioDos").value;
precio3=document.getElementById("PrecioTres").value;
precio1=parseInt(precio1);
precio2=parseInt(precio2);
precio3=parseInt(precio3);
promedio=(precio1+precio2+precio3)/3;
alert (promedio);
}
function PrecioFinal () 
{
precio1=document.getElementById("PrecioUno").value;
precio2=document.getElementById("PrecioDos").value;
precio3=document.getElementById("PrecioTres").value;
precio1=parseInt(precio1);
precio2=parseInt(precio2);
precio3=parseInt(precio3);
final=(precio1+precio2+precio3)*1.21;
alert (final);
}
function Mostrar()
{

var contador=0,acumulador=0,respuesta='si',num=0;


while (respuesta=="si")
{
	num=parseInt(prompt("Ingrese un numero"));
	contador++;
	acumulador=acumulador+num;
	respuesta=prompt ("¿Desea ingresar un numero?");
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
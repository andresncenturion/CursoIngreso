function Mostrar()
{

var contador=0, positivo=0, negativo=0, respuesta='si';

while (respuesta=="si")
{
	num=parseInt(prompt("Ingrese un numero"));
	if (num<0)
	{
		negativo=1*num;
	}
	else
	{
		positivo=positivo+num;
	}
	respuesta=prompt ("¿Desea ingresar un numero?");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
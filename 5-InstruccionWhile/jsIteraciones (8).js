function Mostrar()
{

var contador=0, positivo=0, negativo=0, respuesta='si',contnegativo=0;

while (respuesta=="si")
{
	num=parseInt(prompt("Ingrese un numero"));
	if (num>0)
	{
		positivo=positivo+num;
	}
	else
	{
	contnegativo++;
		if (contnegativo==1)
		{
			negativo=1;
		}
	negativo=negativo*num;
	}
	respuesta=prompt ("¿Desea ingresar un numero?");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
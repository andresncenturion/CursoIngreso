function Mostrar()
{

	var max,min,num,respuesta='si',bandera=true;

	while(respuesta=='si')
	{
	num=prompt("Ingrese un numero:");
		if (bandera==true)
		{
		bandera=false;
		max=num;
		min=num;
		}
		else
		{
			if (num>max)
			{
				max=num;
			}
			if (num<min)
			{
				min=num;
			}
		}
	respuesta=prompt("Desea ingresar otro numero?");
	}
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;

}//FIN DE LA FUNCIÓN
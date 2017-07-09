function Mostrar()
{

	var max=0,min=0,num=0,respuesta='si';

	while(respuesta=='si')
	{
		num=parseInt(prompt ("Ingrese un numero:"));
		if (num>max)
		{
			max=num;
		}
		else if (num<min)
		{
			min=num;
		}
		respuesta=prompt ("Desea ingresar otro numero?");
	}
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;

}//FIN DE LA FUNCIÓN
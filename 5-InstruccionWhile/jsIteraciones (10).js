function Mostrar()
{
	var respuesta=true,num=0,neg=0;contneg=0,pos=0,contpos=0,ceros=0,pares=0,promneg=0,prompos=0,dif=0;

	while(respuesta===true)
	{
		num=parseInt(prompt("Ingrese un numero:"));
		if (num<0)
		{
			neg+=num;
			contneg++;
		}
		else if (num>0)
		{
			pos+=num;
			contpos++;
		}
		else
		{
			ceros++;
		}
		if (num%2==0)
		{
			pares++;
		}
		respuesta=confirm("Desea ingresar otro numero?");
	}
	promneg=neg/contneg;
	prompos=pos/contpos;
	if (contneg==0)
	{
		promneg="No ingreso ningun numero negativo";
	}
	if (contpos==0)
	{
		prompos="No ingreso ningun numero positivo";
	}
	dif=pos-neg;
	if (dif<0)
	{
		dif*=-1;
	}
	
	document.write("La suma de los negativos es: "+neg+"<br/>La suma de los positivos es: "+pos+
					"<br/>La cantidad de negativos es: "+contneg+"<br/>La cantidad de positivos es: "+contpos+
					"<br/>La cantidad de ceros es: "+ceros+"<br/>La cantidad de numeros pares es: "+pares+
					"<br/>El promedio de los numeros positivos es: "+prompos+
					"<br/>El promedio de los numeros negativos es: "+promneg+
					"<br/>La diferencia entre positivos y negativos es: "+dif);
}
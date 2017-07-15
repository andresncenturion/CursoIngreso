function Mostrar()
{

var contador=1,acumulador=0,num=0;

while (contador<6)
{
	num=parseInt(prompt ("Ingrese un numero"));
	if (!isNaN(num))
	{
	contador++;
	acumulador=acumulador+num;
	}
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
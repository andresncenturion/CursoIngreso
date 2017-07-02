function Mostrar()
{
//Genero el número RANDOM entre 1 y 10 
var nota;

nota=(Math.floor(Math.random()*10+1));
if (nota<4)
{
	alert ("La nota es: "+nota+"\nVamos la proxima se puede");
}
else
{
	if (nota>=9)
	{
		alert ("La nota es: "+nota+"\nEXCELENTE")
	}
	else
	{
		alert ("La nota es: "+nota+"\nAPROBO")
	}
}	

}//FIN DE LA FUNCIÓN
/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto=0; 
var contadorIntentos=0;
var falta;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto=Math.floor(Math.random()*100)+1;
    
}

function verificar()
{
apuesta=document.getElementById("numero").value;
apuesta=parseInt(apuesta);
contadorIntentos++;
if (apuesta==numeroSecreto)
  {
	if (contadorIntentos>10)
		{  
   		alert ("Usted utilizó "+contadorIntentos+" intentos.\nAfortunado en el amor!");
    	}
	else if (contadorIntentos>=6)
		{
		alert ("Usted utilizó "+contadorIntentos+" intentos.\nFalta técnica!");
		}
	else if (contadorIntentos==5)
		{
		alert ("Usted utilizó "+contadorIntentos+" intentos.\nUsted está en la media!");
		}
	else if (contadorIntentos==4)
		{
		alert ("Usted utilizó "+contadorIntentos+" intentos.\nExcelente técnica!");
		}
	else if (contadorIntentos==3)
		{
		alert ("Usted utilizó "+contadorIntentos+" intentos.\nEsto es suerte!!");
		}
	else if (contadorIntentos==2)
		{
		alert ("Usted utilizó "+contadorIntentos+" intentos.\nExcelente percepción!!");
		}
	else 
		{
		alert ("Usted utilizó "+contadorIntentos+" intentos.\nUSTED ES UN PSIQUICO!!");
		}
	}
  else
  {
    if (apuesta<numeroSecreto)
    {
      falta=numeroSecreto-apuesta;
      alert ("Falta "+falta+" para llegar al numero secreto");
      document.getElementById("intentos").value=contadorIntentos;
    }
    else
    {
      falta=apuesta-numeroSecreto;
      alert ("Se pasó "+falta+" del numero secreto");
      document.getElementById("intentos").value=contadorIntentos;
    }
  }	
	
}
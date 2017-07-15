/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var maquina,gano=0,empate=0,perdio=0;

function comenzar()
{
maquina=(Math.floor(Math.random()*(4-1))+1);
console.log(maquina);
}

function piedra()
{
comenzar();
switch (maquina)
    {
    case 1:
        alert ("Empate");
        break;
    case 2:
        alert ("Perdio");
        break;
    case 3:
        alert ("Gano");
        break;
    }	
}

function papel()
{
comenzar();
switch (maquina)
    {
    case 1:
        alert ("Gano");
        break;
    case 2:
        alert ("Empate");
        break;
    case 3:
        alert ("Perdio");
        break;
    }	
}

function tijera()
{
comenzar();
switch (maquina)
    {
    case 1:
        alert ("Perdio");
        break;
    case 2:
        alert ("Gano");
        break;
    case 3:
        alert ("Empato");
        break;
    }	

}

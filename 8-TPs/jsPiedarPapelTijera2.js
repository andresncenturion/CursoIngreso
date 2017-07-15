var maquina,empate=0,gano=0,perdio=0,resultado;

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
        empate++;
		break;
	case 2:
        perdio++;
        break;
    case 3:
        gano++;
        break;
    }	
	mostrarResultado();
}

function papel()
{
comenzar();
switch (maquina)
    {
    case 1:
        gano++;
        break;
    case 2:
        empate++;
        break;
    case 3:
        perdio++;
        break;
    }
	mostrarResultado();	
}

function tijera()
{
comenzar();
switch (maquina)
    {
    case 1:
        perdio++;
        break;
	case 2:
        gano++;
        break;
    case 3:
        empate++;
        break;
    }
	mostrarResultado();	

}

function mostrarResultado()
{
if (gano>=empate+perdio&&empate+perdio+gano==3)
{
	gano--;
}
alert ("Gano: "+gano+" partidas"+"\nEmpato: "+empate+" partidas"+"\nPerdio: "+perdio+" partidas");
}



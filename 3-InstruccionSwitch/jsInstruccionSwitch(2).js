function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert ("Ya pasamos el frío, ahora calor");
    break;
    case "Julio":
    alert ("Abrigate que hace frio");
    break;
    case "Agosto":
    alert ("Abrigate que hace frio");
    break;
    default:
    alert ("Falta para el invierno");
    break;
}


}//FIN DE LA FUNCIÓN
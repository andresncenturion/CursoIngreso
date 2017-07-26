function Mostrar()
{
var num,contpares=0;
num=parseInt(prompt ("Ingrese un numero",000));
for (i=0;i<=num;i++)
{
     if (i%2==0)
    {
        contpares++;
        console.log(i);
    }
}
console.log("La cantidad de numeros pares es: "+contpares);



}//FIN DE LA FUNCIÓN
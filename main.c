#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "funciones.h"

#define CANT 3

int main()
{
    struct jugador independiente[CANT];
    int i;

    printf ("**CARGA DE JUGADORES CONMEBOL SUDAMERICANA**\n");

    for (i=0;i<CANT;i++)
    {
        independiente[i].dorsal=i+1;
        printf ("APELLIDO: ");
        fflush(stdin);
        scanf("%[^\n]",independiente[i].apellido);
        printf ("NOMBRE: ");
        fflush(stdin);
        scanf("%[^\n]",independiente[i].nombre);
        printf ("EDAD: ");
        scanf("%d",&independiente[i].edad);
    }


    for (i=0;i<CANT;i++)
    {
        printf ("DORSAL: %d\n",independiente[i].dorsal);
        printf ("APELLIDO: %s\n",independiente[i].apellido);
        printf ("NOMBRE: %s\n",independiente[i].nombre);
        printf ("EDAD: %d\n",independiente[i].edad);
    }


    return 0;
}


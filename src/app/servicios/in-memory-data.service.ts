import { Injectable } from '@angular/core';
import { Tema } from '../modelos/tema';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() { 
    const temas = [
      {
        titulo: 'TypeScript',
        contenido: 'Introducción a TypeScript. La idea es ver como nos ayuda TypeScript cuando estamos programando',
        puntuacion: 5.0,
        autor: "Mike Papitas",
        duracion: 12,
        id: 1
    },
    {
        titulo: 'Tuberias',
        contenido: 'Las tuberias se utilizan para cambiar la forma en la que se presentan los datos. No los cambian.',
        puntuacion: 3.7,
        autor: "Glen Rice",
        duracion: 8,
        id: 2
    },
    {
        titulo: 'Componentes',
        contenido: 'Creación de componentes y entendiendo la estructura',
        puntuacion: 4.5,
        autor: "Norman Powell",
        duracion: 8,
        id: 3
    },
    {
        titulo: 'Directivas',
        contenido: '¿Qué es esto y para que nos sirve',
        puntuacion: 4.0,
        autor: "Luka Garza",
        duracion: 6,
        id: 4
    },
    {
        titulo: 'Formularios',
        contenido: 'Un poco de formularios. Control en el html y en el ts.',
        puntuacion: 4.4,
        autor: "Precius Achiwa",
        duracion: 20,
        id: 5
    },
    {
        titulo: 'Servicios y Dependencias',
        contenido: 'Cómo interactuar con los datos y eliminar el código pegamento',
        puntuacion: 4.1,
        autor: "Cameron Payne",
        duracion: 16,
        id: 6
    },
    {
        titulo: 'Autenticación',
        contenido: 'Registro y Login de usuarios',
        puntuacion: 4.3,
        autor: "Jerald Wallace",
        duracion: 14,
        id: 7
    },
    {
        titulo: 'Enrutamiento',
        contenido: 'Cómo desarrollar el workflow de la página',
        puntuacion: 4.8,
        autor: "Jerome Wiggins",
        duracion: 8,
        id: 8
    }
    ];
    console.log('Base de datos en memoria creada con temas');
    return {temas};
  }

  genId(temas: Tema[]): number {
    console.log('Generando ID para el nuevo tema');
    return temas.length > 0 ? Math.max(...temas.map(t => t.id ?? 0)) + 1 : 1;
  }
  
}



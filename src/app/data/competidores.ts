// Datos de ejemplo para competidores
import { Competitor } from '../types/competitor';

export const COMPETIDORES: Competitor[] = [
  {
    id: 1,
    documentId: 'facundo-pidal',
    nombre: 'Facundo Pidal',
    color_cinturon: 'amarillo',
    fotos: [
      'competidores/facundo-pidal/foto1.jpg',
      'competidores/facundo-pidal/foto2.jpg',
      'competidores/facundo-pidal/podio-nacional.jpg',
    ],
    luchas: [
      {
        titulo: 'Lucha 1',
        link: 'https://www.youtube.com/embed/1_f4uEuRCxk?si=fJBocJDYAYT22Dyb',
      },
    ],
    descripcion: 'Descripción de ejemplo para el competidor.',
    edad: 20,
    peso: 81,
  },
  {
    id: 2,
    documentId: 'lorenzo-aletto',
    nombre: 'Lorenzo Aletto',
    color_cinturon: 'verde',
    fotos: ['competidores/lorenzo-aletto/foto1.jpg'],
    luchas: [
      { titulo: 'Lucha 1', link: 'https://www.youtube.com/embed/ejemplo2' },
    ],
    descripcion: 'Descripción de ejemplo para Lorenzo Aletto.',
    edad: 19,
    peso: 75,
  },
  {
    id: 3,
    documentId: 'adonis-gonzalez',
    nombre: 'Adonis Gonzalez',
    color_cinturon: 'verde',
    fotos: ['competidores/adonis-gonzalez/foto1.jpg'],
    luchas: [
      { titulo: 'Lucha 1', link: 'https://www.youtube.com/embed/ejemplo3' },
    ],
    descripcion: 'Descripción de ejemplo para Adonis Gonzalez.',
    edad: 22,
    peso: 78,
  },
  {
    id: 4,
    documentId: 'giovanna-monroy',
    nombre: 'Giovanna Monroy',
    color_cinturon: 'azul',
    fotos: ['competidores/giovanna-monroy/foto1.jpg'],
    luchas: [
      { titulo: 'Lucha 1', link: 'https://www.youtube.com/embed/ejemplo4' },
    ],
    descripcion: 'Descripción de ejemplo para Giovana Monroy.',
    edad: 18,
    peso: 60,
  },
  {
    id: 5,
    documentId: 'candela-suarez',
    nombre: 'Candela Suarez',
    color_cinturon: 'negro',
    fotos: ['competidores/candela-suarez/foto1.jpg'],
    luchas: [
      { titulo: 'Lucha 1', link: 'https://www.youtube.com/embed/ejemplo5' },
    ],
    descripcion: 'Descripción de ejemplo para Candela Suarez.',
    edad: 20,
    peso: 65,
  },
  {
    id: 6,
    documentId: 'lautaro-pidal',
    nombre: 'Lautaro Pidal',
    color_cinturon: 'verde',
    fotos: ['competidores/lautaro-pidal/foto1.jpg'],
    luchas: [
      { titulo: 'Lucha 1', link: 'https://www.youtube.com/embed/ejemplo1' },
    ],
    descripcion: 'Descripción de ejemplo para el competidor.',
    edad: 21,
    peso: 66,
  },
];

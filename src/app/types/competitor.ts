export interface Competitor {
  id: number;
  documentId: string;
  nombre: string;
  color_cinturon:
    | 'blanco'
    | 'amarillo'
    | 'naranja'
    | 'verde'
    | 'azul'
    | 'marron'
    | 'negro';
  fotos?: string[];
  luchas?: { titulo: string; link: string }[];
  descripcion: string;
  edad: number;
  peso: number;
  logros?: any;
}

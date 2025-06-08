export interface Event {
  id: number;
  documentId: string;
  titulo: string;
  descripcion: string;
  lugar: string;
  media: string[];
  logros: any;
  fecha_inicio: Date | string;
  fecha_fin?: Date | string;
}

import { Competitor } from '../types/competitor';
import { COMPETIDORES } from '../data/competidores';
import { EVENTOS } from '../data/eventos';
import { LOGROS } from '../data/logros';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetitorService {
  getCompetitors(): Observable<{ data: Competitor[] }> {
    // Asignar logros a cada competidor dinámicamente
    const competitors = COMPETIDORES.map((c) => ({
      ...c,
      logros: LOGROS.filter((l) => l.competidor === c.nombre),
    }));
    return of({ data: competitors });
  }

  getCompetitor(id: string): Observable<{ data: Competitor | undefined }> {
    const competitor = COMPETIDORES.find(
      (c) => c.documentId === id || c.id.toString() === id
    );
    if (!competitor) return of({ data: undefined });
    // Asignar logros dinámicamente
    competitor.logros = LOGROS.filter(
      (l) => l.competidorId === competitor.documentId
    );
    // Enlazar evento si corresponde
    for (let i = 0; i < competitor.logros.length; i++) {
      competitor.logros[i].evento = EVENTOS.find(
        (e) =>
          e.documentId === competitor.logros[i].eventoId ||
          e.id.toString() === competitor.logros[i].eventoId
      );
    }
    return of({ data: { ...competitor } });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Achievement } from '../types/logro';
import { Event } from '../types/event';
import { LOGROS } from '../data/logros';
import { EVENTOS } from '../data/eventos';
import { COMPETIDORES } from '../data/competidores';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getAchievements(): Observable<{ data: Achievement[] }> {
    return of({ data: LOGROS });
  }

  getEvents(limit?: number): Observable<{ data: Event[] }> {
    // Asignar logros a cada evento dinámicamente
    const eventos = (limit ? EVENTOS.slice(0, limit) : EVENTOS).map(
      (evento) => ({
        ...evento,
        logros: LOGROS.filter((l) => l.eventoId === evento.documentId),
      })
    );
    // Asignar competidores a cada logro
    for (const evento of eventos) {
      for (const logro of evento.logros) {
        logro.competidor = COMPETIDORES.find(
          (c) => c.documentId === logro.competidorId
        )?.nombre;
      }
    }

    return of({ data: eventos });
  }
}

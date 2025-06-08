import { Component, Input } from '@angular/core';
import { Event } from '../../types/event';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-event',
  imports: [GalleryComponent],
  template: `
    <article
      class="bg-red-50 rounded-lg shadow-xl p-6 flex flex-col gap-4 border border-gray-200 transition mb-6"
    >
      <h3 class="text-xl font-semibold mb-2">{{ event.titulo }}</h3>
      <app-gallery [images]="event.media" />
      <p>{{ event.descripcion }}</p>
      @if (event.logros?.length) {
      <div class="flex flex-wrap gap-2 mt-2">
        <h4>Logros obtenidos:</h4>
        @for (logro of event.logros; track $index) {
        <span class="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
          {{ logro.competidor }}: {{ logro.titulo }}
        </span>
        }
      </div>
      }
    </article>
  `,
  styles: ``,
})
export class EventComponent {
  @Input({ required: true }) event!: Event;
}

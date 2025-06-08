import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  template: `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-stone-800">
      <img
        [src]="achievement.media[0]"
        alt="Logro"
        class="w-full h-48 object-cover"
      />
      <div class="p-4 text-stone-800">
        <h3 class="text-lg font-semibold">{{ achievement.titulo }}</h3>
        @if(achievement.evento) {
        <div class="bg-amber-50 p-2 rounded-md">
          <p>📍 {{ achievement.evento.lugar }}</p>
          <p>📅 {{ achievement.evento.fecha_inicio }}</p>
        </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class AchievementComponent {
  @Input() achievement: any;
}

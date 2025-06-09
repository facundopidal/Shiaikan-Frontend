import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompetitorService } from '../../services/competitor.service';
import { belts } from '../../data/belts';
import { Competitor } from '../../types/competitor';

@Component({
  selector: 'app-competitors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-8 py-16 min-h-dvh">
      <h1 class="text-4xl font-bold mb-8 text-stone-800">
        Nuestros Competidores
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        @for (competitor of competitors; track competitor.id) {
        <div
          class="bg-white rounded-lg shadow-sm flex overflow-hidden transition-all hover:shadow-xl hover:scale-110 cursor-pointer"
          [routerLink]="['/competidor/', competitor.documentId]"
        >
          <img
            [src]="competitor.fotos?.[0]"
            [alt]="competitor.nombre"
            class="w-25 h-32 object-cover"
          />
          <div class="text-stone-800 font-bold p-4">
            <h2 class="text-xl font-bold mb-2">{{ competitor.nombre }}</h2>
            <p class="line-clamp-3">{{ competitor.peso }} kg</p>
          </div>
        </div>
        }
      </div>
    </div>
  `,
  styles: [],
})
export class CompetitorsComponent implements OnInit {
  competitors: Competitor[] = [];

  constructor(
    private competitorService: CompetitorService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Competidores - Shiaikan Dojo - Mar del Plata');
    this.meta.updateTag({
      name: 'description',
      content:
        'Listado de competidores de Shiaikan Dojo en Mar del Plata. Conocé a nuestros judokas, sus logros y trayectoria.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Competidores - Shiaikan Dojo - Mar del Plata',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Listado de competidores de Shiaikan Dojo en Mar del Plata. Conocé a nuestros judokas, sus logros y trayectoria.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://shiaikandojo.netlify.app/competidores',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: '/home/shiaikan-logo.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Competidores - Shiaikan Dojo - Mar del Plata',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Listado de competidores de Shiaikan Dojo en Mar del Plata. Conocé a nuestros judokas, sus logros y trayectoria.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: '/home/shiaikan-logo.jpg',
    });
  }

  ngOnInit() {
    this.competitorService.getCompetitors().subscribe({
      next: (res) => {
        this.competitors = res.data;
      },
    });
  }
}

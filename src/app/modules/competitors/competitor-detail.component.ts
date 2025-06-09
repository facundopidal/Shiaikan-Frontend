import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitorService } from '../../services/competitor.service';
import { Competitor } from '../../types/competitor';
import { belts } from '../../data/belts';
import { AchievementComponent } from '../../components/achievement/achievement.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-competitor-detail',
  standalone: true,
  imports: [AchievementComponent, GalleryComponent, SafeUrlPipe],
  template: `
    <div class="mx-auto px-4 py-8">
      <div class="relative z-1"></div>
      <div class="max-w-4xl mx-auto">
        <!-- Información principal -->
        <article
          class="overflow-hidden mb-8 p-4 relative bg-[#f5f1e4] bg-[url(/designs/diseño-rojo.png)] bg-no-repeat bg-cover bg-center shadow-lg shadow-red-100 rounded-xl"
        >
          <!-- Background decorative elements -->
          <div class="absolute inset-0 overflow-hidden">
            <div class="absolute bottom-0 right-0">
              <img
                src="/designs/leon.png"
                alt="León decorativo"
                class="w-20 md:w-40 drop-shadow-xs drop-shadow-white"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="relative z-10 flex flex-col w-full p-4 md:p-0">
            <div class="mx-auto">
              <img
                [src]="competitor.fotos?.[0]"
                [alt]="competitor.nombre"
                class="h-48 w-48 md:h-80 md:w-80 m-2 md:m-4 rounded-full object-cover"
              />
            </div>
            <div
              class="flex-1 flex flex-col items-center justify-center text-center md:text-left"
            >
              <h1
                class="text-3xl md:text-6xl text-red-500 font-viner font-bold mb-2 align-bottom"
              >
                {{ competitor.nombre }}
              </h1>
              <div>
                <img
                  src="belt.png"
                  [alt]="'Cinturón ' + selectedBelt.name"
                  [style.filter]="selectedBelt.filter"
                  class="w-24 h-16 md:w-32 md:h-24 mix-blend-hard-light"
                />
              </div>
              <p class="text-stone-800 font-bold text-lg md:text-xl">
                {{ competitor.peso }} kg
              </p>
              <p class="text-stone-800 pt-2 text-sm md:text-base px-4 md:px-0">
                {{ competitor.descripcion }}
              </p>
            </div>
          </div>
        </article>

        <!-- Logros -->
        <div
          class="mb-8 p-6 rounded-lg bg-red-50 border border-gray-200 shadow-lg shadow-red-100"
        >
          <h2 class="text-2xl font-semibold mb-4">Logros</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            @for(achievement of competitor.logros; track $index) {
            <app-achievement [achievement]="achievement" />
            }
          </div>
        </div>

        <!-- Galería de fotos con slider -->
        <div
          class="mb-8 p-6 rounded-lg bg-red-50 border border-gray-200 shadow-lg shadow-red-100"
        >
          <h2 class="text-2xl font-semibold mb-4 text-stone-800">Galería</h2>
          <app-gallery [images]="galleryImages"></app-gallery>
        </div>

        <!-- Videos -->
        <div
          class="mb-8 p-6 rounded-lg bg-red-50 border border-gray-200 shadow-lg shadow-red-100"
        >
          <h2 class="text-2xl font-semibold mb-4 text-stone-800">Videos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for(video of competitor.luchas; track $index) {
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-video">
                <iframe
                  [src]="video.link | safeUrl"
                  class="w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay;"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold">{{ video.titulo }}</h3>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
    `,
  ],
})
export class CompetitorDetailComponent implements OnInit {
  competitor!: Competitor;
  selectedBelt: any;
  galleryImages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private competitorService: CompetitorService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    let id;
    this.route.params.subscribe((params) => {
      id = params['documentId'];
    });
    this.competitorService.getCompetitor(id!).subscribe((response) => {
      this.competitor = response.data!;
      this.selectedBelt = belts.find(
        (belt) => belt.name === this.competitor.color_cinturon
      )!;
      // Galería: omite la primera foto (ya se muestra como principal)
      this.galleryImages = this.competitor.fotos?.slice(1) ?? [];
      // SEO dinámico
      this.titleService.setTitle(`${this.competitor.nombre} - Shiaikan Dojo`);
      this.metaService.updateTag({
        name: 'description',
        content: `Perfil, logros y videos de ${this.competitor.nombre} en Shiaikan Dojo.`,
      });
      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.competitor.nombre} - Shiaikan Dojo`,
      });
      this.metaService.updateTag({
        property: 'og:description',
        content: `Perfil, logros y videos de ${this.competitor.nombre} en Shiaikan Dojo.`,
      });
    });
  }
}

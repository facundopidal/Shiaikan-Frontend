import {
  Component,
  inject,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { Achievement } from '../../types/logro';
import { Event } from '../../types/event';
import { RouterLink } from '@angular/router';
import { EventComponent } from '../../components/event/event.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, EventComponent],
  template: `
    <section class="hero-section relative h-screen overflow-hidden">
      <!-- Botón para mutear/desmutear -->
      <div class="absolute top-4 right-4 z-20">
        <button
          (click)="toggleMute()"
          class="bg-black opacity-40 text-white px-4 py-2 rounded hover:cursor-pointer hover:opacity-90 transition"
        >
          {{ isMuted ? '🔇' : '🔊' }}
        </button>
      </div>
      <video
        #heroVideo
        src="home/Harai-goshi.mp4"
        loop
        autoplay
        [muted]="true"
        disableRemotePlayback
        x-webkit-airplay="deny"
        class="absolute inset-0 w-full h-full object-cover"
      ></video>
      <div
        class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center"
      >
        <h1
          class="custom-text-shadow-white text-5xl md:text-6xl font-viner font-extrabold mb-6 text-red-500"
        >
          Shiaikan Dojo
        </h1>
        <p class="text-xl md:text-2xl max-w-2xl">Seguimos avanzando.</p>
        <button
          (click)="scrollToInfo()"
          class="mt-8 px-6 py-3 bg-red-500 hover:bg-red-700 cursor-pointer rounded-lg transition-colors duration-300"
        >
          Conocé Shiaikan
        </button>
      </div>
    </section>

    <section id="info" #infoSection class="py-20 bg-white">
      <div
        class="container mx-auto p-6 max-w-4xl bg-red-50 rounded-2xl shadow-xl border border-gray-200"
      >
        <h2 class="text-4xl text-center font-bold mb-8 text-stone-800">
          ¿Quiénes somos?
        </h2>
        <p class="mb-4 text-lg leading-relaxed text-gray-700">
          En Shiaikan Dojo formamos judokas con pasión, disciplina y respeto.
          Somos un espacio dedicado a la enseñanza del Judo tradicional y
          competitivo, abierto a personas de todas las edades y niveles.
        </p>
        <p class="mb-4 text-lg leading-relaxed text-gray-700">
          Nuestro enfoque combina la excelencia técnica con la formación de
          valores, siguiendo la filosofía del Judo como camino de superación
          personal. Acompañamos a cada alumno en su desarrollo físico y mental,
          respetando su ritmo y potenciando sus habilidades.
        </p>
        <div class="flex justify-center mt-8">
          <button
            routerLink="competidores"
            class="px-6 py-3 bg-red-500 hover:shadow-lg cursor-pointer text-white rounded-lg transition-colors duration-300"
          >
            Ver nuestros competidores
          </button>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 text-center text-stone-800">
          Últimos eventos
        </h2>
        <div class="max-w-4xl m-auto">
          @for (event of events; track $index) {
          <app-event [event]="event" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero-section {
        position: relative;
        height: 100vh;
        overflow: hidden;
      }

      section {
        scroll-margin-top: 4rem;
      }

      .custom-text-shadow-white {
        filter: drop-shadow(2px 2px 0 #fff) drop-shadow(-2px -2px 0 #fff);
      }

      .custom-text-shadow-red {
        filter: drop-shadow(2px 2px 0 #fb2c36) drop-shadow(-2px -2px 0 #fb2c36);
      }
    `,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('infoSection') infoSection!: ElementRef;
  @ViewChild('heroVideo') heroVideo!: ElementRef;

  homeService = inject(HomeService);
  videoUrl: string = '';
  achievements: Achievement[] = [];
  events: Event[] = [];

  scrollToInfo() {
    console.log(this.infoSection);
    this.infoSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.getAchievements();
    this.getEvents();
  }

  isMuted: boolean = false;

  toggleMute() {
    const video = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = !video.muted;
      this.isMuted = video.muted;
    }
  }

  getAchievements() {
    this.homeService.getAchievements().subscribe({
      next: (res) => {
        this.achievements = res.data;
      },
    });
  }
  getEvents() {
    this.homeService.getEvents(4).subscribe({
      next: (res) => {
        this.events = res.data;
      },
    });
  }

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
    video.muted = true; // aseguramos no muteado al iniciar
    this.isMuted = true; // aseguramos el estado inicial del botón

    video.addEventListener('ended', () => {
      this.scrollToInfo();
    });
  }
}

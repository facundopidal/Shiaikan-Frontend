import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="relative flex flex-col items-center">
      <div class="w-full max-w-xl flex items-center justify-center">
        <button
          class="p-2 text-2xl cursor-pointer"
          (click)="prevSlide()"
          [disabled]="galleryIndex === 0"
          aria-label="Anterior"
        >
          ‹
        </button>
        <div
          class="aspect-square overflow-hidden rounded-lg flex-1 mx-2 flex items-center justify-center bg-gray-100 shadow-lg shadow-red-100"
        >
          @if (images.length > 0) {
          <img
            [src]="images[galleryIndex]"
            class="w-full h-full object-cover transition-opacity duration-200"
            [class.opacity-0]="galleryFade"
            [class.opacity-100]="!galleryFade"
            alt="Foto de galería"
            (load)="onGalleryImageLoad()"
          />
          }
        </div>
        <button
          class="p-2 text-2xl cursor-pointer"
          (click)="nextSlide()"
          [disabled]="galleryIndex === images.length - 1"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
      <div class="flex gap-2 mt-4">
        @for(img of images; track $index) {
        <button
          class="w-4 h-4 rounded-full border-2"
          [class]="
            galleryIndex === $index
              ? 'bg-red-500 border-red-500'
              : 'bg-gray-300 border-gray-400'
          "
          (click)="goToSlide($index)"
          [attr.aria-label]="'Ir a la imagen ' + ($index + 1)"
        ></button>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .opacity-0 {
        opacity: 0;
      }
      .opacity-100 {
        opacity: 1;
      }
      .transition-opacity {
        transition: opacity 0.2s;
      }
    `,
  ],
})
export class GalleryComponent {
  @Input() images: string[] = [];
  galleryIndex = 0;
  galleryFade = false;

  prevSlide() {
    if (this.galleryIndex > 0) {
      this.triggerGalleryFade(() => {
        this.galleryIndex--;
      });
    }
  }

  nextSlide() {
    if (this.galleryIndex < this.images.length - 1) {
      this.triggerGalleryFade(() => {
        this.galleryIndex++;
      });
    }
  }

  goToSlide(index: number) {
    if (this.galleryIndex !== index) {
      this.triggerGalleryFade(() => {
        this.galleryIndex = index;
      });
    }
  }

  triggerGalleryFade(changeFn: () => void) {
    this.galleryFade = true;
    setTimeout(() => {
      changeFn();
      // Espera a que la imagen nueva cargue para mostrarla (onGalleryImageLoad)
    }, 250);
  }

  onGalleryImageLoad() {
    setTimeout(() => {
      this.galleryFade = false;
    }, 10);
  }
}

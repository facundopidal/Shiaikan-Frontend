import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer>
      <div class="w-full py-8 px-4 bg-zinc-300">
        <div
          class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6"
        >
          <div class="flex items-center space-x-3 text-stone-800">
            <span class="text-xl font-semibold tracking-wide mx-auto">
              <a href="/">Shiaikan Dojo</a>
            </span>
          </div>
          <nav class="flex flex-wrap gap-4 text-sm mx-auto min-w-max">
            <a href="/" class="hover:text-red-500 transition">Inicio</a>
            <a href="#info" class="hover:text-red-500 transition">
              Sobre Nosotros
            </a>
            <a href="/contact" class="hover:text-red-500 transition">
              Contacto
            </a>
          </nav>
        </div>
        <div class="mt-6 text-center text-xs text-gray-500">
          &copy; {{ currentYear }} Shiaikan Dojo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}

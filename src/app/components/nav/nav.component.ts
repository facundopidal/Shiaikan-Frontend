import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-transparent shadow-lg ">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-2">
              <img
                src="home/shiaikan-logo.jpg"
                alt="Logo Shiaikan"
                class="h-10 w-auto"
              />
              <span class="text-xl font-bold text-stone-800"
                >Shiaikan Dojo</span
              >
            </a>
          </div>
          <div class="flex space-x-4 text-stone-800">
            <a routerLink="/competidores" class="px-3 py-2 rounded-md">
              <span
                class="border-b-2 border-transparent hover:border-red-600 pb-0.5 transition-all"
              >
                Competidores
              </span>
            </a>
            <a routerLink="/contact" class="px-3 py-2 rounded-md">
              <span
                class="border-b-2 border-transparent hover:border-red-600 pb-0.5 transition-all"
              >
                Contactános
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavComponent {}

import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CompetitorsComponent } from './modules/competitors/competitors.component';
import { CompetitorDetailComponent } from './modules/competitors/competitor-detail.component';
import { ContactComponent } from './modules/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'competidores',
    component: CompetitorsComponent,
  },
  {
    path: 'competidor/:documentId',
    component: CompetitorDetailComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

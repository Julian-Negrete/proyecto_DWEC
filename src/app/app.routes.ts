import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { TemarioComponent } from './paginas/temario/temario.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { TuberiasComponent } from './paginas/tuberias/tuberias.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'temario', component: TemarioComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'tuberias', component: TuberiasComponent },
  { path: '**', redirectTo: 'home' } 
];

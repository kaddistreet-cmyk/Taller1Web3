import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalogo } from './catalogo/catalogo';
import { Nosotros } from './nosotros/nosotros';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio | Tailor Shop' },
  { path: 'catalogo', component: Catalogo, title: 'Catálogo | Tailor Shop' },
  { path: 'nosotros', component: Nosotros, title: 'Nosotros | Tailor Shop' },
  { path: 'contacto', component: Contacto, title: 'Contacto | Tailor Shop' },
  { path: '**', component: Home },
];

import { Routes } from '@angular/router';
import {TablaUsuariosComponent} from "./usuarios/pages/tabla-usuarios/tabla-usuarios.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: TablaUsuariosComponent,
    title: 'Listado de usuarios'
  },
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];

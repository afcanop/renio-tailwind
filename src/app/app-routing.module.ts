import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./plantilla/admin/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () => import('./modulos/sitio/sitio.module').then(m => m.SitioModule)
  },
  {
    path: 'modulo',
    component: LayoutComponent,
    children: [
      {
        path: 'cartera',
        loadChildren: () => import('./modulos/cartera/cartera.module').then(m => m.CarteraModule)
      },
      {
        path: 'compra',
        loadChildren: () => import('./modulos/compra/compra.module').then(m => m.CompraModule)
      },
      {
        path: 'contabilidad',
        loadChildren: () => import('./modulos/contabilidad/contabilidad.module').then(m => m.ContabilidadModule)
      },
      {
        path: 'humano',
        loadChildren: () => import('./modulos/humano/humano.module').then(m => m.HumanoModule)
      },
      {
        path: 'venta',
        loadChildren: () => import('./modulos/venta/venta.module').then(m => m.VentaModule)
      },
    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      /*{
        path: "reporte-general",component: ReporteGeneralComponent
      },
      {
        path: "news", component: NewsComponent
      },
      {
        path: "information", component: InformationComponent
      },
      {
        path: "mapa",component: MapComponent
      },*/

    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

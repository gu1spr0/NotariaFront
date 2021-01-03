import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages-routes';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    GraficasComponent,
    ProgressComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    GraficasComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }

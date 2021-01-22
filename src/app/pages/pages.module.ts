import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages-routes';

// Componentes para formularios
import { CardModule } from 'primeng-lts/card';
import { ButtonModule } from 'primeng-lts/button';
import { PanelMenuModule } from 'primeng-lts/panelmenu';
import { TabViewModule } from 'primeng-lts/tabview';
import { TableModule } from 'primeng-lts/table';
import { DialogModule } from 'primeng-lts/dialog';
import { InputTextModule } from 'primeng-lts/inputtext';
import { PanelModule } from 'primeng-lts/panel';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';

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
    PAGES_ROUTES,
    CardModule,
    ButtonModule,
    PanelMenuModule,
    TabViewModule,
    TableModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    InputTextareaModule
  ]
})
export class PagesModule { }

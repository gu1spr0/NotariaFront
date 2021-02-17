import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { APP_ROUTES } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng-lts/messages';
import { MessageModule } from 'primeng-lts/message';
import { FormsModule, FormControl } from '@angular/forms';
import { MessageService } from 'primeng-lts/api';
import { CardModule } from 'primeng-lts/card';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CardModule,
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

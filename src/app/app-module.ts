import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivrariaComponent } from './livraria-component/livraria-component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLivraria } from './home-livraria/home-livraria';
import { FooterLivraria } from './footer-livraria/footer-livraria';
import { NavBarLivraria } from './nav-bar-livraria/nav-bar-livraria';
import { ClienteLivraria } from './cliente-livraria/cliente-livraria';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    LivrariaComponent,
    HomeLivraria,
    FooterLivraria,
    NavBarLivraria,
    ClienteLivraria
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }

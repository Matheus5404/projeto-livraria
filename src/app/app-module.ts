import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LivrariaComponent } from './livraria-component/livraria-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLivraria } from './home-livraria/home-livraria';
import { FooterLivraria } from './footer-livraria/footer-livraria';
import { NavBarLivraria } from './nav-bar-livraria/nav-bar-livraria';

@NgModule({
  declarations: [
    App,
    LivrariaComponent,
    HomeLivraria,
    FooterLivraria,
    NavBarLivraria
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

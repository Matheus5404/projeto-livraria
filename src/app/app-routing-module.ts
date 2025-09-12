import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLivraria } from './home-livraria/home-livraria';
import { LivrariaComponent } from './livraria-component/livraria-component';
import { ClienteLivraria } from './cliente-livraria/cliente-livraria';
import { FooterLivraria } from './footer-livraria/footer-livraria';


const routes: Routes = [
    { path: '', component: HomeLivraria },
    { path: 'livraria', component: LivrariaComponent },
    { path: 'cliente', component: ClienteLivraria }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

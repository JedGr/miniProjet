import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErreurComponent } from './component/erreur/erreur.component';
import { ExcursionComponent } from './component/excursion/excursion.component';
import { ListeComponent } from './component/liste/liste.component';
import { SelectedExcursionComponent } from './component/selectedExcursion/selected-excursion/selected-excursion.component';
import { WhyusComponent } from './component/whyus/whyus.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { AdminComponent } from './component/admin/admin.component';
const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'liste',component:ListeComponent},
  {path:'liste/:id',component:SelectedExcursionComponent},
  {path:'excursion',component:ExcursionComponent},
  {path:'contact',component:ContactComponent},
  {path:'whyus',component:WhyusComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'admin',component:AdminComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

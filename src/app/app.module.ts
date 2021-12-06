import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ListeComponent } from './component/liste/liste.component';
import { ExcursionComponent } from './component/excursion/excursion.component';
import { ErreurComponent } from './component/erreur/erreur.component';
import { WhyusComponent } from './component/whyus/whyus.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SelectedExcursionComponent } from './component/selectedExcursion/selected-excursion/selected-excursion.component';
import { CommentaireComponent } from './component/commentaire/commentaire/commentaire.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './component/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ListeComponent,
    ExcursionComponent,
    ErreurComponent,
    WhyusComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    SelectedExcursionComponent,
    CommentaireComponent,
    InscriptionComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

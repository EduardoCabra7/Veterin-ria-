import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './page/contato/contato.component';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { NavbarComponent } from './fixa/inicial/navbar.component';
import { FooterComponent } from './fixa/footer/footer.component';
import { PainelComponent } from './page/painel/painel.component';
import { AtualizarComponent } from './page/atualizar/atualizar.component';
import { CadastrarComponent } from './page/cadastrar/cadastrar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    SobreComponent,
    NavbarComponent,
    FooterComponent,
    PainelComponent,
    AtualizarComponent,
    CadastrarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

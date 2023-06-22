import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
//importando os componentes
import { ContatoComponent } from './page/contato/contato.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { PainelComponent } from './page/painel/painel.component';
import { CadastrarComponent } from './page/cadastrar/cadastrar.component';
import { AtualizarComponent } from './page/atualizar/atualizar.component';



HomeComponent
ContatoComponent
SobreComponent
PainelComponent
CadastrarComponent
AtualizarComponent


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'sobre', component:SobreComponent },
  { path: 'contato', component:ContatoComponent },
  { path: 'painel', component:PainelComponent },
  { path: 'cadastrar', component:CadastrarComponent },
  { path: 'atualizar', component:AtualizarComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

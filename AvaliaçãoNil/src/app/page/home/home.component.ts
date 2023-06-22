import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/service/order.service';
import { ServicoModel } from 'src/app/service/servicoModel';
OrderService;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: OrderService) {}
  cliData: any;
  modelServico:ServicoModel= new ServicoModel()
  ngOnInit(): void {
this.listar()
  }

  listar(){
    this.service.listarServicos().subscribe(
      dados=>{
        this.cliData =dados
      }, (err) => {
        console.log('Erro ao listar servicos', err);
      }

    )
  }
  cadastrar(){

this.service.cadastrarServicos(this.modelServico).subscribe(dados =>{
  this.listar()
}, (err) => {
  console.log('Erro ao cadastrar servicos', err);
})

  }


  atualizar(id:number){
    this.service.alterarServicos(id,this.modelServico).subscribe(dados=>{
      this.listar()
    }, (err) => {
      console.log('Erro ao atualizar servicos', err);
    })
  }


  delete(id:number){

    this.service.deletarServicos(id).subscribe(dados=>{
      this.listar()
    }, (err) => {
      console.log('Erro ao excluir servicos', err);
    })

  }

  agendar(){}

}
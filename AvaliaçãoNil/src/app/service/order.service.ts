import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoModel } from './servicoModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url:string = "http://localhost:3000/servicos/"
  constructor(private http:HttpClient) { }


listarServicos():Observable<any>{
  return this.http.get(`${this.url}`)
}

cadastrarServicos(servico:ServicoModel){
  return this.http.post(`${this.url}`,servico)
}


alterarServicos(id:any,servico:ServicoModel){
  return this.http.put(`${this.url}/`.concat(id),servico)
}

deletarServicos(id:any){
  
  return this.http.delete(`${this.url}/`.concat(id))
}


}

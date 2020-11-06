import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Array<Produto> = new Array<Produto>();
  public data: Date = new Date();

  constructor() { }

  ngOnInit(): void { 
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
    this.produtos.push({descricao: 'C1', valor: 'R$ 9,00'});
   }

}

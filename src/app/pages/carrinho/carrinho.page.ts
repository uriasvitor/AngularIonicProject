import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { projetoService } from 'src/projetoService.service';
import { projetoModel } from 'src/projeto.model';
import { SecondPage } from '../second/second.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  providers:[projetoService]
})
@Injectable({
  providedIn:'root'
})

export class CarrinhoPage implements OnInit {
  public produtoAtual: projetoModel;
  public produtos:projetoModel[];
  public indexAtual = -1;
  public title = '';

  @Output() public produtoImport:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit():void { 
    this.get();   
  }
  constructor(private service:projetoService,private route:Router) { }

  public async showInfo(){
    this.route.navigate(['/menu/second'],{queryParams:{data:this.indexAtual}})
  }

  public get(){
    this.service.getAll().subscribe(data=>{
      this.produtos = data;
    },
    error =>{
      console.log(error);
    });
  }

  public atualizarLista():void{
    this.get();
    this.produtoAtual = undefined
    this.indexAtual = 1;
  }
  
  public ativarLista(produto:projetoModel,index:number):void{
    this.produtoAtual = produto;
    this.indexAtual = index;
    this.produtoImport.emit(this.indexAtual)
  }

}

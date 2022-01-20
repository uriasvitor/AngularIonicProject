import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { projetoService } from 'src/projetoService.service';
import { projetoModel } from 'src/projeto.model';
import { FristPage } from '../frist/frist.page';
import { SecondPage } from '../second/second.page';

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

  public produtos:projetoModel[];
  public produtoAtual: projetoModel;
  public indexAtual = -1;
  public title = '';

  ngOnInit():void {
    this.get();
  }
  constructor(private service:projetoService, private modalCtrl:ModalController) { }

  public async showModal(){
    const modal = await this.modalCtrl.create({
      component: SecondPage
    })
    modal.present();
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
  @Input()
  public ativarLista(produto:projetoModel,index:number):void{
    this.produtoAtual = produto;
    this.indexAtual = index;

  }

}

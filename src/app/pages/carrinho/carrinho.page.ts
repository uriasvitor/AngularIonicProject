import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { projectService } from 'src/project-service';
import { projeto } from 'src/projeto.model';
import { FristPage } from '../frist/frist.page';
import { SecondPage } from '../second/second.page';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  providers:[projectService]
})
@Injectable({
  providedIn:'root'
})
export class CarrinhoPage implements OnInit {
  public produtos:projeto[];

  produtoAtual: projeto;
  indexAtual = -1;
  title = '';

  ngOnInit():void {
    this.get();
  }
  constructor(private service:projectService, private modalCtrl:ModalController) { }

  public async showModal(){
    const modal = await this.modalCtrl.create({
      component: SecondPage
    })
    modal.present();
  }

  public get(){
    this.service.getAll().subscribe(data=>{
      this.produtos = data;
      console.log(data)
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
  public ativarLista(produto:projeto,index:number):void{
    this.produtoAtual = produto;
    this.indexAtual = index;
    console.log(this.indexAtual)
    console.log(this.produtoAtual)
  }

}

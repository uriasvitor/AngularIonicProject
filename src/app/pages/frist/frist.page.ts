import { Component, OnInit } from '@angular/core';
import { projetoModel } from 'src/projeto.model';
import { projetoService } from 'src/projetoService.service';

@Component({
  selector: 'app-frist',
  templateUrl: './frist.page.html',
  styleUrls: ['./frist.page.scss'],
  providers:[projetoService]
})
export class FristPage implements OnInit {
  produto:projetoModel[];
  currentStatus:any

  constructor(private service:projetoService) { }

  public getList():void{
    this.service.getAll().subscribe(data =>{
      this.produto = data;
      this.currentStatus = data;
      console.log(data)
    
    },error =>{
      console.log(error)
    })
  }

  ngOnInit() {
    this.getList();
  }

  public statusCompra = [
    "RECEBIDO",
    "APROVADO",
    "SEPARADO",
    "EM TRANSPORTE",
    "FOI ENTREGUE"
  ]

  public imagem =[
    '../../../assets/fotos_produtos/fusivel.jpg',
    '../../../assets/fotos_produtos/notebook.jpg',
  ]

}

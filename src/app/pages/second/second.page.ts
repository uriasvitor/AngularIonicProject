import { Component, OnInit } from '@angular/core';
import { projectService } from 'src/project-service';
import { projeto } from 'src/projeto.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  providers:[projectService],
})

export class SecondPage implements OnInit {
  listas:projeto[];
  currentStatus:any

  constructor(private service:projectService) { }

  public getList():void{
    this.service.getAll().subscribe(data =>{
      this.listas = data;
      this.currentStatus = data;
      console.log(data)
    
    },error =>{
      console.log(error)
    })
  }

  ngOnInit() {
    this.getList();
  }

  public pedidos = [
    "Recebido",
    "Aprovado",
    "Separado",
    "Em Transporte",
    "Entregue"
  ]
  public statusCompra = [
    "RECEBIDO",
    "APROVADO",
    "SEPARADO",
    "EM TRANSPORTE",
    "FOI ENTREGUE"
  ]
  public productInfo = [
    "Recebemos seu pedido e estamos processando o pagamento.",
    "Processamos seu pedido e logo iniciaremos a separação.",
    "Os itens do Seu Pedido Foram Separados E logo Saira Para Transporte.",
    "Seu pedido está em transporte.Tenha alguém no endereço para Recebê-lo.",
    "Pedido entregue.Agradecemos por escolher o DAG para Abastecer seu estoque."
  ]

  public imagem =[
    '../../../assets/img/progress2.png',
    '../../../assets/img/progress3.png',
    '../../../assets/img/progress4.png',
    '../../../assets/img/progress5.png',
    '../../../assets/img/progress6.png',
  ]

}
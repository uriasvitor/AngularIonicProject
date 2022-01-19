import { Component, OnInit } from '@angular/core';
import { projeto } from 'src/projeto.model';
import { projectService } from 'src/project-service';

@Component({
  selector: 'app-frist',
  templateUrl: './frist.page.html',
  styleUrls: ['./frist.page.scss'],
  providers:[projectService]
})
export class FristPage implements OnInit {
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
  public i():number{
    return 1
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
    '../../../assets/img/progress.png',
    '../../../assets/img/progress2.png'
  ]

}

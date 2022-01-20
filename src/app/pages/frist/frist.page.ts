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

  public statusCompra = [
    "RECEBIDO",
    "APROVADO",
    "SEPARADO",
    "EM TRANSPORTE",
    "FOI ENTREGUE"
  ]

  public imagem =[
    '../../../assets/img/progress2.png',
    '../../../assets/img/progress3.png',
    '../../../assets/img/progress4.png',
    '../../../assets/img/progress5.png',
    '../../../assets/img/progress6.png',
  ]

}

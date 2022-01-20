import { Component, OnInit } from '@angular/core';
import { projetoService } from 'src/projetoService.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
  providers:[projetoService]
})
export class ContaPage implements OnInit {

  constructor(private service:projetoService) { }

  public get(){
    this.service.getAll().subscribe
  }

  ngOnInit() {
  }

}

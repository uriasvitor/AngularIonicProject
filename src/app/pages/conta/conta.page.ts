import { Component, OnInit } from '@angular/core';
import { projectService } from 'src/project-service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
  providers:[projectService]
})
export class ContaPage implements OnInit {

  constructor(private service:projectService) { }

  public get(){
    this.service.getAll().subscribe
  }

  ngOnInit() {
  }

}

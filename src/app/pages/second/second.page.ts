import { Component, OnInit } from '@angular/core';
import { projectService } from 'src/project-service';
import { projeto } from 'src/projeto.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  list:projeto[];
  constructor(private service:projectService) { }


  public get(){
    this.service.getAll().subscribe(data=>{
      this.list = data
    })
  }
  ngOnInit() {
    this.get();
  }

}

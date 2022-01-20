import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [{
      title: 'Inbox',
      url: '/menu/frist',
      icon:'mail-open-outline'
    },
    {
      title:'Carrinho',
      url: '/menu/carrinho',
      icon:'cart-outline'
    },
    {
      title:'Conta',
      url: '/menu/conta',
      icon:'person-circle-outline'
    },
    {
      title:'Adm',
      url: '/menu/adm',
      icon:"options-outline"
    }
  ];

  selectedPath = ''
  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath = event.url;
    })
   }

  ngOnInit() {
  }

}

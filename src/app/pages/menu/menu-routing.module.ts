import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
  component: MenuPage,
  children:[
    {
      path:'frist',
      loadChildren:() => import ('../frist/frist.module').then(x => x.FristPageModule)
    },
    {
      path:'second',
      loadChildren:() => import ('../second/second.module').then(x => x.SecondPageModule)
    },
    {
      path: 'conta',
      loadChildren: () => import('../conta/conta.module').then( m => m.ContaPageModule)
    },
    {
      path: 'carrinho',
      loadChildren: () => import('../carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
    },
    {
      path: 'adm',
      loadChildren: () => import('../adm/adm.module').then( m => m.AdmPageModule)
    },
    {
    path:'',
    redirectTo: '/menu'
  }
  
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

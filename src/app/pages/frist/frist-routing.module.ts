import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FristPage } from './frist.page';

const routes: Routes = [
  {
    path: '',
    component: FristPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FristPageRoutingModule {}

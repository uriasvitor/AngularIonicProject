import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FristPageRoutingModule } from './frist-routing.module';

import { FristPage } from './frist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FristPageRoutingModule
  ],
  declarations: [FristPage]
})
export class FristPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IklanPageRoutingModule } from './iklan-routing.module';

import { IklanPage } from './iklan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IklanPageRoutingModule
  ],
  declarations: [IklanPage]
})
export class IklanPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IklanPage } from './iklan.page';

const routes: Routes = [
  {
    path: '',
    component: IklanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IklanPageRoutingModule {}

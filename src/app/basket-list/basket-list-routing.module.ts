import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketListPage } from './basket-list.page';

const routes: Routes = [
  {
    path: '',
    component: BasketListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketListPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketListPageRoutingModule } from './basket-list-routing.module';

import { BasketListPage } from './basket-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketListPageRoutingModule
  ],
  declarations: [BasketListPage]
})
export class BasketListPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityPageRoutingModule } from './city-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CityPage } from './city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CityPage]
})
export class CityPageModule {}

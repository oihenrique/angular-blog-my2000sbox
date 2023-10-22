import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/card/card.module';
import { NavigationModule } from '../navigation/navigation.module';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    NavigationModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }

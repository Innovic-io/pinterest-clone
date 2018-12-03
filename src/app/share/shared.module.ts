import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ CardComponent, CardDetailsComponent ],
  exports: [ CardComponent, CardDetailsComponent ]
})
export class SharedModule { }

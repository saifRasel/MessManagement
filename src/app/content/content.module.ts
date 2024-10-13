import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { MyComComponent } from './my-com/my-com.component';



@NgModule({
  declarations: [
    ContentComponent,
    MyComComponent,
    
  ],
  exports:[MyComComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }

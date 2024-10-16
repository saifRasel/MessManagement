import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentModule } from '../content/content.module';
import { ContentComponent } from '../content/content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    DashbordComponent,
    AddMembersComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
    
    
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from '../admin/admin.component';
import { AddMembersComponent } from './add-members/add-members.component';

const routes: Routes = [ 
 {path:'dashboard',component:DashbordComponent,title:'DashBoard',
  children: [
    { path: 'add-members', component: AddMembersComponent, title: 'Add Members' }
  ]

 },
//  {
//   path:'add-members',component:AddMembersComponent,title:'add Members'
//  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

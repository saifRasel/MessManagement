import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [ 

  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

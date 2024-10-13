import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { ContentComponent } from './content.component';
import { MyComComponent } from './my-com/my-com.component';

const routes: Routes = [{ path: '', component: ContentComponent },
  { path: 'test-com', component: MyComComponent,title:'Mycom' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }

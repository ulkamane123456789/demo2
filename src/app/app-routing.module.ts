import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaberComponent } from './laber/laber.component';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './shop/shop.component';
import { WorkerComponent } from './worker/worker.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"shop",
        component:ShopComponent
    },
    {
      path:"worker",
      component:WorkerComponent
    },
    {
      path:"laber",
      component:LaberComponent
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';

const routes: Routes = [
  {path:'add',component:AddemployeeComponent},
  
  {path:'edit/:id',component:EditemployeeComponent},
  {path:'delete',component:DeleteemployeeComponent},
  {path:'',component:ListemployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

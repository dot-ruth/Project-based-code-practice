import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
{path:'Employee',component:EmployeeComponent},
{path:'Department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

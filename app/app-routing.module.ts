import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import {DepartmentDetailComponent } from './department-detail.component';
//import {HomeComponent} from './Home';
import { PageNotFoundComponent } from './pagenotfound.component';
import { HomeComponet } from './Home';

const routes: Routes = [

    {path: '', redirectTo: '/Home' , pathMatch: 'full' },
    {path: 'departments', component: DepartmentListComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments/:id', component: DepartmentDetailComponent},
    {path: 'Home', component: HomeComponet},
    {path: '**', component: PageNotFoundComponent}
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule{}
  export const routingComponents = [HomeComponet,PageNotFoundComponent,DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent];

  
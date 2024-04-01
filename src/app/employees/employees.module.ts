import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActiveEmployeesComponent } from './components/active-employees/active-employees.component';
import { InactiveEmployeesComponent } from './components/inactive-employees/inactive-employees.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    AddNewEmployeeComponent,
    DashboardComponent,
    AttendanceComponent,
    LeavesComponent,
    PayrollComponent,
    TasksComponent,
    ActiveEmployeesComponent,
    InactiveEmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }

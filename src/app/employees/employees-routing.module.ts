import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ActiveEmployeesComponent } from './components/active-employees/active-employees.component';
import { InactiveEmployeesComponent } from './components/inactive-employees/inactive-employees.component';

const routes: Routes = [
  {
    path: '', component: EmployeesComponent, children: [
      { path: '', component: DashboardComponent },
      { path: "employees-list", component: EmployeesListComponent },
      { path: "add-new-employee", component: AddNewEmployeeComponent },
      { path: "attendance", component: AttendanceComponent },
      { path: "leaves", component: LeavesComponent },
      { path: "payroll", component: PayrollComponent },
      { path: "tasks", component: TasksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

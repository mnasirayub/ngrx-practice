import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Store } from '@ngrx/store';
import { emptyAlert } from 'src/app/shared/Global/appGlobalActions';
import { AppGlobalModel } from 'src/app/shared/Global/appGlobalModel';
import { EmployeesModel, SingleEmployeeModel } from 'src/app/shared/models/employeesModel';
import { changeEmployeeStatus, loadEmployees } from 'src/app/shared/store/employees/employeesActions';
import { getAlert, getEmployeesSelector } from 'src/app/shared/store/employees/employeesSelector';

@Component({
  selector: 'app-active-employees',
  templateUrl: './active-employees.component.html',
  styleUrls: ['./active-employees.component.css']
})
export class ActiveEmployeesComponent implements OnInit {

  employees!: EmployeesModel;
  constructor(private store: Store<AppGlobalModel>, private toast: HotToastService) { }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.store.select(getEmployeesSelector).subscribe(res => {
      this.employees = res;
    })
  }

  onStatusChange(employeeData: SingleEmployeeModel) {
    let data = { ...employeeData };
    data.status === 'active' ? data.status = 'in-active' : data.status = 'active';
    this.store.dispatch(changeEmployeeStatus({ employeeCode: data.employeeCode, empData: data }));
    this.store.select(getAlert).subscribe((res: any) => {
      if (res.alertType === 'success') {
        this.toast.success(res.message);
      } else if (res.alertType === 'error') {
        this.toast.error(res.message);
      }
      this.store.dispatch(emptyAlert());
    })
  }

  getRandomColor(skill: any) {
    switch (skill.toUpperCase()) {
      case "ANGULAR": return "#ff4c4c";
      case "REACT": return "#00a4e4";
      case "VUE": return "#0abf53";
      case "JAVASCRIPT": return "#fbb034";
      case "HTML": return '#ff0000';
      case "CSS": return "#0cb9c1"
      case "NODEJS": return "#2c9f45";
      case "PHP": return "#037ef3";
      default: return "#6a737b";
    }
  }

}

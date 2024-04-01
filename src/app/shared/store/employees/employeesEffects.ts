import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addEmployee, addEmployeeSuccess, changeEmployeeStatus, changeEmployeeStatusSuccess, LOAD_EMPLOYEES, loadEmployees, loadEmployeesFail, loadEmployeesSuccess } from "./employeesActions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { EmployeesService } from "../../services/employees.service";
import { SingleEmployeeModel } from "../../models/employeesModel";
import { emptyAlert, showAlert } from "../../Global/appGlobalActions";

@Injectable()


export class EmployeesEffect {

  constructor(private action$: Actions, private empService: EmployeesService) { }

  _loadEmployees = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_EMPLOYEES),
      exhaustMap((action) => {
        return this.empService.getEmployees().pipe(
          map((res) => {
            return loadEmployeesSuccess({ employees: res });
          }),
          catchError((err) => {
            return of(loadEmployeesFail({ error: err }));
          })
        )
      })
    )
  );

  _onAddNewEmployee = createEffect(() =>
    this.action$.pipe(
      ofType(addEmployee),
      switchMap((action) => (
        this.empService.onAddEmployee(action.employee).pipe(
          switchMap((data) => of(
            addEmployeeSuccess({ employee: data }),
            showAlert({ message: "Employee added successfully!", alertType: "success" })
          )),
          catchError((err) => of(showAlert({ message: "Employee not added due to : " + err.message, alertType: "error" })))
        )
      ))
    )
  );

  _onChangeEmployeeStatus = createEffect(() =>
    this.action$.pipe(
      ofType(changeEmployeeStatus),
      switchMap((action) => (
        this.empService.onChangeEmployeeStatus(action.employeeCode, action.empData).pipe(
          switchMap((data: any) => of(
            changeEmployeeStatusSuccess({ employeeCode: action.employeeCode, empData: action.empData}),
            showAlert({ message: "Employee status changed successfully!", alertType: "success" })
          )),
          catchError((err) => of(showAlert({ message: "Employee status not updated due to : " + err.message, alertType: "error" })))
        )
      ))
    )
  )

}



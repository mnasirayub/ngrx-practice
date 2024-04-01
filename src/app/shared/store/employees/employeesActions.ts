import { createAction, props } from "@ngrx/store";
import { SingleEmployeeModel } from "../../models/employeesModel";

export const LOAD_EMPLOYEES = '[employees page] load employees';
export const LOAD_EMPLOYEES_SUCCESS = '[employees page] load employees success';
export const LOAD_EMPLOYEES_FAIL = '[employees page] load employees fail';

export const ADD_EMPLOYEE = '[employee page] add employee';
export const ADD_EMPLOYEE_SUCCESS = '[employee page] add employee success';

export const CHANGE_EMPLOYEE_STATUS = '[employee page] change employee status';
export const CHANGE_EMPLOYEE_STATUS_SUCCESS = '[employee page] change employee status success';

export const loadEmployees = createAction(LOAD_EMPLOYEES);
export const loadEmployeesSuccess = createAction(LOAD_EMPLOYEES_SUCCESS, props<{ employees: SingleEmployeeModel[] }>());
export const loadEmployeesFail = createAction(LOAD_EMPLOYEES_FAIL, props<{ error: any }>());

export const addEmployee = createAction(ADD_EMPLOYEE, props<{ employee: SingleEmployeeModel }>());
export const addEmployeeSuccess = createAction(ADD_EMPLOYEE_SUCCESS, props<{ employee: SingleEmployeeModel }>())

export const changeEmployeeStatus = createAction(CHANGE_EMPLOYEE_STATUS, props<{ employeeCode: string; empData: SingleEmployeeModel }>());
export const changeEmployeeStatusSuccess = createAction(CHANGE_EMPLOYEE_STATUS_SUCCESS, props<{ employeeCode: string; empData: SingleEmployeeModel }>())

import { createReducer, on } from "@ngrx/store"
import { employeesState } from "./employeesState"
import { addEmployeeSuccess, changeEmployeeStatusSuccess, loadEmployees, loadEmployeesSuccess } from "./employeesActions"
import { emptyAlert, showAlert } from "../../Global/appGlobalActions"

const _employeeReducer = createReducer(employeesState,
  on(loadEmployees, (state, action) => {
    return {
      ...state
    }
  }),
  on(loadEmployeesSuccess, (state, action) => {
    return {
      ...state,
      employees: [...action.employees]
    }
  }),
  on(addEmployeeSuccess, (state, action) => {
    let newEmp = { ...action.employee };
    return {
      ...state,
      employees: [...state.employees, newEmp]
    }
  }),
  on(showAlert, (state, action) => {
    return {
      ...state,
      message: action.message,
      alertType: action.alertType
    }
  }),
  // on(emptyAlert, (state) => {
  //   return {
  //     ...state,
  //     message: "",
  //     alertType: ""
  //   }
  // }),
  on(changeEmployeeStatusSuccess, (state, action) => {
    let updatedEmp = { ...action.empData };
    const updatedEmployee = state.employees.map((item: any) => {
      return updatedEmp.id === item.id ? updatedEmp : item
    })
    return {
      ...state,
      employees: updatedEmployee
    }
  })
)

export function employeesReducer(state: any, action: any) {
  return _employeeReducer(state, action)
}

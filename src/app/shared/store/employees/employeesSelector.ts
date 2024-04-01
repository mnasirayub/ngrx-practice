import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeesModel } from "../../models/employeesModel";

export const employeesSelector = createFeatureSelector<EmployeesModel>('employees');

export const getEmployeesSelector = createSelector(employeesSelector, (state) => {
  return state
})

export const getAlert = createSelector(employeesSelector, (state) => {
  return { alertType: state.alertType, message: state.message }
})

import { EmployeesEffect } from "../store/employees/employeesEffects";
import { ProductsEffects } from "../store/products/productsEffects";

export const AppGlobalEffects = [
  EmployeesEffect,
  ProductsEffects
]

import { employeesReducer } from "../store/employees/employeesReducer";
import { productsReducer } from "../store/products/productsReducer";

export const AppGlobalState = {
  employees: employeesReducer,
  products: productsReducer
}

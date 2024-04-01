import { EmployeesModel } from "../models/employeesModel";
import { ProductsModel } from "../models/productsModel";

export interface AppGlobalModel {
  employees: EmployeesModel,
  products: ProductsModel
}

import { createAction, props } from "@ngrx/store";
import { SingleProductModel } from "../../models/productsModel";

export const LOAD_PRODUCTS = '[products page] load products';
export const LOAD_PRODUCTS_SUCCESS = '[products page] load products successfully';
export const LOAD_PRODUCTS_FAIL = '[products page] load products fail';


export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{ products: SingleProductModel[] }>());
export const loadProductsFail = createAction(LOAD_PRODUCTS_FAIL, props<{ error: any }>());

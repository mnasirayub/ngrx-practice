import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsModel } from "../../models/productsModel";

const productsSelector = createFeatureSelector<ProductsModel>('products');


export const getProductsList = createSelector(productsSelector, (state)=>{
  return state
})

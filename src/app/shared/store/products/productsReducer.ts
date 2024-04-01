import { createReducer, on } from "@ngrx/store";
import { productsState } from "./productsState";
import { loadProducts, loadProductsSuccess } from "./productsActions";

const _productsReducer = createReducer(productsState,
  on(loadProducts, (state) => {
    return {
      ...state
    }
  }),
  on(loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: [...action.products]
    }
  })
)

export function productsReducer(state: any, action: any) {
  return _productsReducer(state, action);
}

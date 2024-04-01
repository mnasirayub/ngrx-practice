import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../services/products.service";
import { LOAD_PRODUCTS, loadProducts, loadProductsFail, loadProductsSuccess } from "./productsActions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()


export class ProductsEffects {
  constructor(private action$: Actions, private productsService: ProductsService) { }

  _loadProducts = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_PRODUCTS),
      exhaustMap((action) => {
        return this.productsService.getProducts().pipe(
          map((data) => {
            return loadProductsSuccess({ products: data })
          }),
          catchError((error) => of(loadProductsFail({ error: error.message })))
        )
      })
    )
  );

}

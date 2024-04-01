import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppGlobalModel } from 'src/app/shared/Global/appGlobalModel';
import { ProductsModel } from 'src/app/shared/models/productsModel';
import { loadProducts } from 'src/app/shared/store/products/productsActions';
import { getProductsList } from 'src/app/shared/store/products/productsSelector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: ProductsModel;
  p: number = 1;

  constructor(private store: Store<AppGlobalModel>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store.select(getProductsList).subscribe(res => {
      this.products = res;
    })
  }

  pageChanged(event: any) {

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class ProductsModule { }

export interface SingleProductModel{
  id:string;
  name:string;
  description:string;
  features:string;
  price:string;
  keywords:string;
  url:string;
  category:string;
  subcategory:string;
}


export interface ProductsModel{
  products: SingleProductModel[]
}

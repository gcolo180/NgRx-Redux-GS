import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { getCurrentProduct, getShowProductCode, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private productService: ProductService, private _store: Store<State>) { }

  ngOnInit(): void {
    // unsub from this
    this._store.select(getCurrentProduct).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: err => this.errorMessage = err
    });

    this._store.select(getShowProductCode).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  checkChanged(): void {

    // Action: '[Product] toggle code'
    // Reduce: this.displayCode = !this.displayCode;

    this._store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this._store.dispatch(ProductActions.initCurrentProduct())
    // this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this._store.dispatch(ProductActions.setCurrentProduct({product}))
    // this.productService.changeSelectedProduct(product);
  }

}

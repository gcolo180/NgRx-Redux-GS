import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../product';
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/';
import * as ProductActions from '../state/actions/product-page.actions';
import { Observable } from 'rxjs';
import { ProductPageActions } from '../state/actions';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private _store: Store<State>) { }

  ngOnInit(): void {
    this._store.dispatch(ProductActions.loadProducts());
    this.products$ = this._store.select(getProducts);
    this.errorMessage$ = this._store.select(getError);
    this.selectedProduct$ = this._store.select(getCurrentProduct);
    this.displayCode$ = this._store.select(getShowProductCode);
  }

  checkChanged(): void {
    this._store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this._store.dispatch(ProductActions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    this._store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }));
  }

  saveProduct(product: Product): void {
    this._store.dispatch(ProductPageActions.createProduct({ product }))
  }
  updateProduct(product: Product): void {
    this._store.dispatch(ProductPageActions.updateProduct({ product }))
  }
  deleteProduct(product: Product): void {
    this._store.dispatch(ProductPageActions.deleteProduct({ currentProductId: product.id }))
  }
  clearProduct(): void {
    this._store.dispatch(ProductPageActions.clearCurrentProduct())
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../product';
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private _store: Store<State>) { }

  ngOnInit(): void {
    this.products$ = this._store.select(getProducts);
    this._store.dispatch(ProductActions.loadProducts());
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
    this._store.dispatch(ProductActions.setCurrentProduct({ product }));
  }

}

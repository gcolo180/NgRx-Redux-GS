import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';

import { Product } from '../product';
export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  currentProduct: Product;
  products: Product[];
  showProductCode: boolean;
}

const initialState: ProductState = {
  currentProduct: null,
  products: [],
  showProductCode: true,
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);
export const getCurrentProduct = createSelector(
  getProductFeatureState, 
  state => state.currentProduct
  );
export const getProducts = createSelector(getProductFeatureState, state => state.products);

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] toggle code'), (state): ProductState => {
    console.log('original state: ' + JSON.stringify(state));

    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })
)
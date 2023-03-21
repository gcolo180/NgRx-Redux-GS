import { createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import { ProductApiActions, ProductPageActions } from './actions/';

export interface ProductState {
  currentProductId: number | null;
  products: Product[];
  showProductCode: boolean;
  error: string;
}

const initialState: ProductState = {
  currentProductId: null,
  products: [],
  showProductCode: true,
  error: '',
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId
    }
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    }
  }),
  on(ProductPageActions.initCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    }
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    }
  }),
  on(ProductApiActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    }
  }),
  on(ProductApiActions.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: ''
    };
  }),
  on(ProductApiActions.createProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductApiActions.deleteProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.currentProductId),
      currentProductId: null,
      error: ''
    };
  }),
  on(ProductApiActions.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  })
)
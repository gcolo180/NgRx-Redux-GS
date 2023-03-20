import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction('[Product] toggle code');
export const clearCurrentProduct = createAction('[Product] clear current product');
export const initCurrentProduct = createAction('[Product] init current product');
export const setCurrentProduct = createAction('[Product] set current product',
  props<{ currentProductId: number }>()
);

export const loadProducts = createAction('[Product] load');
export const loadProductsSuccess = createAction('[Product] load success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction('[Product] load failure',
  props<{ error: string }>()
);

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

export const updateProduct = createAction('[Product] update product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction('[Product] update success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction('[Product] update failure',
  props<{ error: string }>()
);

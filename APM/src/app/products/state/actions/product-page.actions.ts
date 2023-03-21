import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const toggleProductCode = createAction('[Product Page] toggle code');
export const clearCurrentProduct = createAction('[Product Page] clear current product');
export const initCurrentProduct = createAction('[Product Page] init current product');
export const setCurrentProduct = createAction('[Product Page] set current product',
  props<{ currentProductId: number }>()
);

export const loadProducts = createAction('[Product Page] load');


export const updateProduct = createAction('[Product Page] update product',
  props<{ product: Product }>()
);

export const createProduct = createAction('[Product Page] create product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction('[Product Page] delete product',
  props<{ currentProductId: number }>()
);

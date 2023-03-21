import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const loadProductsSuccess = createAction('[Product API] load success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction('[Product API] load failure',
  props<{ error: string }>()
);
export const updateProductSuccess = createAction('[Product API] update success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction('[Product API] update failure',
  props<{ error: string }>()
);
export const createProductSuccess = createAction('[Product API] create success',
  props<{ product: Product }>()
);
export const createProductFailure = createAction('[Product API] create failure',
  props<{ error: string }>()
);
export const deleteProductSuccess = createAction('[Product API] delete product success',
  props<{ currentProductId: number }>()
);
export const deleteProductFailure = createAction('[Product API] delete product failure',
  props<{ error: string }>()
);
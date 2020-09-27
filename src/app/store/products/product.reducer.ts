import type {Product} from '../../types/interfaces'
import {Action, createReducer, on} from '@ngrx/store'
import * as ProductActions from './product.action'

const initialState: Product[] = []

const productReducer = createReducer(
  initialState,
  on(ProductActions.addProduct, (state, product) => [...state, product]),
  on(ProductActions.setProducts, (state, list) => [...list.data]),
  on(ProductActions.updateProduct, (state, product ) => state.map(item => {
    if(item.id === product.id) {
     return {...item, product} 
    }
  }))
);

export function reducer(state: Product[] | undefined, action: Action) {
  return productReducer(state, action);
}

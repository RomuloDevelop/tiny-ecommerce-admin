import type {Product} from '../../types/interfaces'
import type {WithRequired} from '../../types/utilities'
import { createAction, props } from '@ngrx/store';

const source = '[Product Page]'

export const addProduct = createAction(`${source} Add`, props<Product>())
export const setProducts = createAction(`${source} Set`, props<{data: Product[]}>())
export const updateProduct = createAction(`${source} Update`, props<WithRequired<Product, 'id'>>())
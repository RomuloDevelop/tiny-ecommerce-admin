import type {Client} from '../../types/interfaces'
import type {WithRequired} from '../../types/utilities'
import { createAction, props } from '@ngrx/store';

const source = '[Client Page]'

export const setClient = createAction(`${source} Create`, props<Client>())
export const updateClient = createAction(`${source} Update`, props<WithRequired<Client, 'id'>>())
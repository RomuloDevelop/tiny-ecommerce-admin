import type {Client} from '../../types/interfaces'
import {Action, createReducer, on} from '@ngrx/store'
import * as ClientActions from './client.action'

const initialState: Client = {
  id: 0,
  description: '',
  name: '',
  image: ''
}
const clientReducer = createReducer(
  initialState,
  on(ClientActions.setClient, (state, client ) => client),
  on(ClientActions.updateClient, (state, client ) => ({ ...state, ...client }))
);

export function reducer(state: Client | undefined, action: Action) {
  return clientReducer(state, action);
}

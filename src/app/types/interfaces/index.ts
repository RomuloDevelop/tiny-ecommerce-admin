import type {Client} from './Client'
import type {Product} from './Product'

export interface State {
  client: Client,
  products: [Product]
}

export * from './Client'

export * from './Product'

import * as clientReducer from './clients/client.reducer'
import * as productReducer from './products/product.reducer'

export default {
  client: clientReducer.reducer,
  products: productReducer.reducer
}
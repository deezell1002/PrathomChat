import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Sherlockholmes from 'sherlockholmes'
import reducers from './reducers'

export default (initialState) => {
  const { inspector } = new Sherlockholmes()

  const middlewares = [thunk, inspector]

  const enhancer = compose(
    applyMiddleware(...middlewares)
  )

  const store = createStore(reducers, initialState, enhancer)
  
  return store
}
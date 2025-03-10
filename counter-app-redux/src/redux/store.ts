import { createStore } from 'redux'
import counterReducer from './counterReducer'

const persistedState = localStorage.getItem('counterState')
  ? JSON.parse(localStorage.getItem('counterState')!)
  : { count: 0 }

const store = createStore(counterReducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('counterState', JSON.stringify(store.getState()))
})

export default store

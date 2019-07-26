import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';

import employeeReducer from '../modules/employee/reducer';

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = { employeeReducer }
const persistedCombinedReducers = persistCombineReducers(persistConfig, reducers)

let store = createStore(persistedCombinedReducers, applyMiddleware(thunk))
let persistor = persistStore(store)

export { store, persistor }


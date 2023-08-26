import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../components/Services/data'
import { cryptoNewsApi } from '../components/Services/cryptoNewsApi'



export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath] : cryptoApi.reducer,
    [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware),

})
import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/CoinrankingAPI';
import { newsAPI } from '../services/BingAPI';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoApi.middleware, newsAPI.middleware),
});
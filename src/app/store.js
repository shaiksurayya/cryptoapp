// import {configureStore} from '@reduxjs/toolkit';

// import { cryptoApi } from '../services/CryptoApi';

// export default configureStore({
//     reducer: {
//         [cryptoApi.reducerPath]: cryptoApi.reducer,
//     },
// });
import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),
});

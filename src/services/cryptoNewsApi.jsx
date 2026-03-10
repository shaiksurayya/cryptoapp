import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://min-api.cryptocompare.com/data';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => '/v2/news/?lang=EN',
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
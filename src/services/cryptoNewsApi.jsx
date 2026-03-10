import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://saurav.tech/NewsAPI';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => ({
        url: '/top-headlines/category/technology/us.json',
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
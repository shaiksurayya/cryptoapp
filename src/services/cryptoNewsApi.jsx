import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

const baseUrl = 'https://gnews.io/api/v4';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        url: '/search',
        params: {
          q: newsCategory || 'cryptocurrency',
          lang: 'en',
          max: count || 20,
          apikey: GNEWS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

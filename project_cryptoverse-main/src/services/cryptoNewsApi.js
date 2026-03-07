// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // const cryptoNewsHeaders = {
// //   'x-bingapis-sdk': 'true',
// //   'x-rapidapi-key': 'aef093f1c854fc6bfbb45fdaa79d2b1c',
// //   'x-rapidapi-host': 'https://gnews.io/api/v4',
// // };

// // const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// // export const cryptoNewsApi = createApi({
// //   reducerPath: 'cryptoNewsApi',
// //   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
// //   endpoints: (builder) => ({
// //     getCryptoNews: builder.query({
// //       query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
// //     }),
// //   }),
// // });

// // export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//   'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
//   'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
// };

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

// const createRequest = (url) => ({
//   url,
//   headers: cryptoNewsHeaders,
// });

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) =>
//         createRequest(
//           `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
//         ),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 🔑 TEMPORARY: hardcoded API key (replace with your own)
//const GNEWS_API_KEY = 'aef093f1c854fc6bfbb45fdaa79d2b1c';
const GNEWS_API_KEY = '44e79c884c8f3fe6dacc510b5c7dc15b';

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
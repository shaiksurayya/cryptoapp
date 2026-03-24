// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = 'https://api.coingecko.com/api/v3';

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: () => '/search/trending',
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;










const API_KEY = process.env.REACT_APP_GNEWS_KEY;

export const fetchCryptoNews = async () => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=cryptocurrency&lang=en&max=12&apikey=${API_KEY}`
    );

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Host':'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '740a9ea20cmsh4612dedbe824583p123261jsn1003fed5fe93'
}

const baseUrl='https://coinranking1.p.rapidapi.com/';

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
            })
    })
});                


export const {
    useGetCryptosQuery,
} =cryptoApi;
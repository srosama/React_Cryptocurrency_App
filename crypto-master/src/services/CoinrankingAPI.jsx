import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'X-RapidAPI-Key': '0db96d30e2msh9175cba73bccdc1p1f9725jsn66c722c2d23e',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`),
    }),
    })
});



export const {
  useGetCryptosQuery,
} = cryptoApi;
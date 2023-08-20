import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsAPI_headers = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '0db96d30e2msh9175cba73bccdc1p1f9725jsn66c722c2d23e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

//Sned and create a request
const createRequest = (url) => ({url, headers:newsAPI_headers});

export const newsAPI = createApi({
    reducerPath: 'newsAPI', 
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (count)=> createRequest(`/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})


export const {useGetNewsQuery} = newsAPI
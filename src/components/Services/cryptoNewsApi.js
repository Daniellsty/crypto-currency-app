import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseAPiUrlHeaderNews = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'dfebd02829msh59e5d8c3b3a74b3p1b7c52jsn3e2cf1190485',
  }



 const baseUrlNews = 'https://bing-news-search1.p.rapidapi.com'

 const createRequest =(url)=> ({url,headers:baseAPiUrlHeaderNews})

 export const cryptoNewsApi = createApi({
     reducerPath: 'cryptoNewsApi',
     baseQuery: fetchBaseQuery({ baseUrl:baseUrlNews }),
     endpoints: (builder) => ({
       getCryptoNews:builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
       })
       }),
     })

 
export const {useGetCryptoNewsQuery} = cryptoNewsApi
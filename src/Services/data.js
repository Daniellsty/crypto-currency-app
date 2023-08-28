import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders  =  {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'dfebd02829msh59e5d8c3b3a74b3p1b7c52jsn3e2cf1190485'
  }

  const baseUrl = 'https://coinranking1.p.rapidapi.com'


  const createRequest =(url)=> ({url,headers:cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCrypto:builder.query({
        query:(count)=> createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetail:builder.query({
        query:(coinId)=> createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory:builder.query({
        query:({coinId,timeperiod})=> createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),
      getExchanges: builder.query({
        query: () => createRequest('/coin/Qwsogvtv82FCd/exchanges'),
      }),
      }),
    })

export const {useGetCryptoQuery, useGetCryptoDetailQuery,useGetCryptoHistoryQuery,useGetExchangesQuery} = cryptoApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders  =  {
  'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY
  }

  const baseUrl = process.env.REACT_APP_CRYPTO_URL


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
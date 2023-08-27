import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseAPiUrlHeader =  {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'dfebd02829msh59e5d8c3b3a74b3p1b7c52jsn3e2cf1190485',
  }

  const BaseUrlCrypto = 'https://coinranking1.p.rapidapi.com'

  const createRequest =(url)=> ({url,headers:baseAPiUrlHeader})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl:BaseUrlCrypto }),
    endpoints: (builder) => ({
      getCrypto:builder.query({
        query:(count)=> createRequest(`/coins?limit=${count}`)
      }),
      getOneCrypto:builder.query({
        query:(id)=> createRequest(`/coin/${id}`)
      })
      }),
    })

export const {useGetCryptoQuery , useGetOneCryptoQuery} = cryptoApi
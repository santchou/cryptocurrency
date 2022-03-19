import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
  "x-rapidapi-key": "fdfd3fd3f2msh8119699115a701dp129606jsn17485a4c50a1",
};

const baseUrl = "https://crypto-news-live3.p.rapidapi.com";

const createRequest = (url) => ({ url, cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest("/news"),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "../types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct[], void>({
      query: () => "products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

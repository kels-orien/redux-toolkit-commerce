import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface Product {
    id: number
    title: string
    price: string
    description: string
    category: string
    image: string
  }


  export const apiSlice = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({
          baseUrl: process.env.REACT_APP_API_URL,
      }),
      endpoints(builder) {
            return {
              fetchProducts: builder.query<Product[], number | void>({
                query(limit) {
                  return `/products?limit=${limit}`
                },
              }),
              fetchProductById: builder.query<Product, number>({
                query(id) {
                  return `/products/${id}`
                },
                }),
              fetchProductsByCategory: builder.query<Product[], string>({
                query(category) {
                  return `/products/category/${category}`
                },
                })
            }
          },
      })
  

export const {  useFetchProductsQuery, useFetchProductByIdQuery, useFetchProductsByCategoryQuery } = apiSlice
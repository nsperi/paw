import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://app-pfm-3065d-default-rtdb.firebaseio.com"}),
    endpoints:(builder)=>({
        getPetsByCategory:builder.query({
            query: (category) => `/pets.json?orderBy="category"&equalTo="${category}"`,
            transformResponse:(response)=>{
                const data = Object.values(response)
                return data
            }
        }),
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getPet:builder.query({
            query:(id) => "/pets.json"
        })
    })
})

export const {useGetCategoriesQuery,useGetPetsByCategoryQuery,useGetPetQuery} = shopApi
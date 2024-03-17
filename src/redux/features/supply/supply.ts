import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSupply: builder.mutation({
            query: (supply) => ({
                url: "/supplies",
                method: "POST",
                body: supply,
            }),
            invalidatesTags: ["Supplies"],
        }),
        getSupplies: builder.query({
            query: () => ({
                url: "/supplies",
                method: "GET",
            }),
            providesTags: ["Supplies"],
        }),
        getSingleSupply: builder.query({
            query: (id) => ({
                url: `/supplies/${id}`,
                method: "GET",
            }),
        }),
        updateSupply: builder.mutation({
            query: (data) => {
                return {
                    url: `/supplies/${data.id}`,
                    method: "PATCH",
                    body: data.data,
                };
            },
            invalidatesTags: ["Supplies"],
        }),
        deleteSupplies: builder.mutation({
            query: (id) => ({
                url: `/supplies/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Supplies"],
        }),
    }),

});

export const {
    useCreateSupplyMutation,
    useGetSuppliesQuery,
    useGetSingleSupplyQuery,
    useUpdateSupplyMutation,
    useDeleteSuppliesMutation
} = supplyApi;

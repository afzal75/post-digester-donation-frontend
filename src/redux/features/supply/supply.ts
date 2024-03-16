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
    }),

});

export const {
    useCreateSupplyMutation,
    useGetSuppliesQuery,
    useGetSingleSupplyQuery
} = supplyApi;

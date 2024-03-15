import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

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
    useGetSuppliesQuery,
    useGetSingleSupplyQuery
} = supplyApi;

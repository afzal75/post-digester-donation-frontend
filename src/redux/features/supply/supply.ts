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
    }),
});

export const {
    useGetSuppliesQuery,
} = supplyApi;

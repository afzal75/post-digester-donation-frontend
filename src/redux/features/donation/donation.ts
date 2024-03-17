import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createDonation: builder.mutation({
            query: (supply) => ({
                url: "/supplies",
                method: "POST",
                body: supply,
            }),
            invalidatesTags: ["Supplies"],
        }),
        getDonations: builder.query({
            query: () => ({
                url: "/supplies",
                method: "GET",
            }),
            providesTags: ["Supplies"],
        }),
        getSingleDonation: builder.query({
            query: (id) => ({
                url: `/supplies/${id}`,
                method: "GET",
            }),
        }),
        updateDonation: builder.mutation({
            query: (data) => {
                return {
                    url: `/supplies/${data.id}`,
                    method: "PATCH",
                    body: data.data,
                };
            },
            invalidatesTags: ["Supplies"],
        }),
        deleteDonations: builder.mutation({
            query: (id) => ({
                url: `/supplies/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Supplies"],
        }),
    }),

});

export const {
    useCreateDonationMutation,
    useGetDonationsQuery,
    useGetSingleDonationQuery,
    useDeleteDonationsMutation
} = supplyApi;

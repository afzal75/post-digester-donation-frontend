import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createDonation: builder.mutation({
            query: (donation) => ({
                url: "/donations",
                method: "POST",
                body: donation,
            }),
            invalidatesTags: ["Donations"],
        }),
        getDonations: builder.query({
            query: () => ({
                url: "/donations",
                method: "GET",
            }),
            providesTags: ["Donations"],
        }),
        getSingleDonation: builder.query({
            query: (id) => ({
                url: `/donations/${id}`,
                method: "GET",
            }),
        }),
        updateDonation: builder.mutation({
            query: (data) => {
                return {
                    url: `/donations/${data.id}`,
                    method: "PATCH",
                    body: data.data,
                };
            },
            invalidatesTags: ["Donations"],
        }),
        deleteDonations: builder.mutation({
            query: (id) => ({
                url: `/donations/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Donations"],
        }),
        getDonationStatistics: builder.query({
            query: () => ({
                url: "/statistics",
                method: "GET",
            }),
            providesTags: ["Donations"],
        }),
    }),

});

export const {
    useCreateDonationMutation,
    useGetDonationsQuery,
    useUpdateDonationMutation,
    useGetSingleDonationQuery,
    useDeleteDonationsMutation,
    useGetDonationStatisticsQuery
} = supplyApi;

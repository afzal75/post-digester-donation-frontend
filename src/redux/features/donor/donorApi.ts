/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


const donorApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDonor: builder.query({
            query: () => {
                return {
                    url: "/donor",
                    method: "GET",
                };
            },
            providesTags: ["donor"],
        }),
    }),
});

export const {
    useGetDonorQuery,
} = donorApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://relife-digester-donation.vercel.app/api/v1",
    }),
    tagTypes: ["Donations"],
    endpoints: () => ({}),
});
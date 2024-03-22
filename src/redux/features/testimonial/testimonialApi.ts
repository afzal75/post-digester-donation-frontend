import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTestimonial: builder.mutation({
            query: (testimonial) => ({
                url: "/testimonial",
                method: "POST",
                body: testimonial,
            }),
            invalidatesTags: ["testimonial"],
        }),
        getTestimonial: builder.query({
            query: () => ({
                url: "/testimonial",
                method: "GET",
            }),
            providesTags: ["testimonial"],
        }),
    }),
});

export const { useCreateTestimonialMutation, useGetTestimonialQuery } =
    testimonialApi;

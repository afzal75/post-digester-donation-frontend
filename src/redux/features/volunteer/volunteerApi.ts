import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createVolunteer: builder.mutation({
            query: (volunteer) => ({
                url: "/volunteer",
                method: "POST",
                body: volunteer,
            }),
            invalidatesTags: ["volunteer"],
        }),
    }),
});

export const { useCreateVolunteerMutation } =
    volunteerApi;

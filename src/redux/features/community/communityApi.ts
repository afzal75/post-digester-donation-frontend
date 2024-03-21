import { baseApi } from "@/redux/api/baseApi";

const communityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createComments: builder.mutation({
            query: (comments) => ({
                url: "/comments",
                method: "POST",
                body: comments,
            }),
            invalidatesTags: ["comments"],
        }),

        getComments: builder.query({
            query: () => ({
                url: "/comments",
                method: "GET",
            }),
            providesTags: ["comments"],
        }),
    }),
});
export const { useCreateCommentsMutation, useGetCommentsQuery } = communityApi;

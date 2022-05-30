import { Question } from "@common-types/question";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  tagTypes: ["questions"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1234" }),
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getQuestions: builder.query<Question[], void>({
      // The URL for the request is "/fakeApi/posts"
      query: () => "/questions",
      // eslint-disable-next-line @typescript-eslint/default-param-last
      providesTags: (result = [], _error, _arg) => [
        "questions",
        ...result.map((item) => ({ type: "questions" as const, id: item.id })),
      ],
    }),
    getQuestion: builder.query<Question, string | undefined>({
      query: (id: string) => `questions/${id}`,
      providesTags: (_result, _error, arg) => [{ type: "questions", id: arg }],
    }),
    updateQuestion: builder.mutation<Question, Question>({
      // The URL for the request is "/fakeApi/posts"
      query: (question) => ({
        url: `questions/${question.id}`,
        method: "PATCH",
        body: question,
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: "questions", id: arg.id }],
    }),
    addNewQuestion: builder.mutation<Question, Question>({
      query: (question) => ({
        url: "/questions",
        method: "POST",
        body: question,
      }),
      invalidatesTags: ["questions"],
    }),
    deleteQuestion: builder.mutation<void, string>({
      query: (id) => ({
        url: `questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["questions"],
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useAddNewQuestionMutation,
  useDeleteQuestionMutation,
  useUpdateQuestionMutation,
} = apiSlice;

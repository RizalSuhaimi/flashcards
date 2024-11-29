import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const topicId = action.payload.id;
            state.topics[topicId] = action.payload;
            state.topics[topicId].quizIds = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => {
                const quizId = action.payload.id;
                const topicId = action.payload.topicId;
                state.topics[topicId].quizIds.push(quizId);
            })
    }
})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const quizId = action.payload.id;
            state.quizzes[quizId] = action.payload;
        }
    },
    extraReducers: (builder) => {
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
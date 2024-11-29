import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const cardId = action.payload.id;
            state.cards[cardId] = action.payload;
        }
    },
    extraReducers: {}

})

export const selectCardById = (cardId) => (state) => state.cards.cards[cardId];
export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
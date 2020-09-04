import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    min: "",
    max: "",
    status: null,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter: (state, action) => action.payload,
        resetFilter: () => initialState,
    },
});

export const { setFilter, resetFilter } = filtersSlice.actions;

export { filtersSlice };

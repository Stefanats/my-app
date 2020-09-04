import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "filters",
    initialState: "",
    reducers: {
        setSearch: (state, action) => action.payload,
    },
});

export const { setSearch } = searchSlice.actions;

export { searchSlice };

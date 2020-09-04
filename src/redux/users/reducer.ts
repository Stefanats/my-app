import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { initialState } from "../../dummyData/";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    thumbnail: string;
    status: boolean;
    games: { name: string; scoredPoints: number }[];
};

const usersAdapter = createEntityAdapter<User>({
    selectId: (user) => user.id,
    sortComparer: (a: User, b: User) => (b.id > a.id ? 1 : -1),
});

const emptyInitialState = usersAdapter.getInitialState();
const filledState = usersAdapter.upsertMany(emptyInitialState, initialState);

const usersSlice = createSlice({
    name: "users",
    initialState: filledState,
    reducers: {
        addUser: (state, action) => usersAdapter.addOne(state, action.payload),
        deleteUser: (state, action) => {
            usersAdapter.removeOne(state, action.payload);
        },
    },
});

export const { addUser, deleteUser } = usersSlice.actions;

export { usersAdapter, usersSlice };

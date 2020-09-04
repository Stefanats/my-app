import { usersAdapter } from "./reducer";

// TODO: replace any
const usersSelector = usersAdapter.getSelectors((state: any) => state.users);

// TODO: replace any
export const selectUsers = (state: any) => usersSelector.selectAll(state);

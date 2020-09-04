import { selectUsers } from "./selector";

import { addUser, deleteUser, usersSlice } from "./reducer";

const usersReducer = usersSlice.reducer;

// Selectors
export { selectUsers };

// Reducers
export { addUser, deleteUser, usersReducer };

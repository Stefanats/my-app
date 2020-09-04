import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "../redux/users";
import { filtersReducer } from "../redux/filters";
import { searchReducer } from "../redux/search";

const rootReducer = combineReducers({
    users: usersReducer,
    filters: filtersReducer,
    search: searchReducer,
});

export default rootReducer;

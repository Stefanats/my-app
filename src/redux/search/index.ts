import { searchSelector } from "./selector";

import { setSearch, searchSlice } from "./reducer";

const searchReducer = searchSlice.reducer;

// Selectors
export { searchSelector };

// Reducers
export { setSearch, searchReducer };

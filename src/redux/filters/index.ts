import { filtersSelector } from "./selector";

import { filtersSlice, setFilter, resetFilter } from "./reducer";

const filtersReducer = filtersSlice.reducer;

// Selectors
export { filtersSelector };

// Reducers
export { filtersSlice, setFilter, resetFilter, filtersReducer };

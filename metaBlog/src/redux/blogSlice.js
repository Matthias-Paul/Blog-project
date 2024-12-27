import { createSlice, createSelector } from "@reduxjs/toolkit";
import { blogData } from "../data.js";

// Initial state
const initialState = {
   blogs: blogData,
   search: "",
};

// Create slice
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});


export const { setSearch } = dataSlice.actions;

// **Memoized selector**
export const filteredData = createSelector(
    [(state) => state.data.blogs, (state) => state.data.search], // Input selectors
    (blogs, search) => 
        blogs.filter((blog) =>
            blog.author.toLowerCase().includes(search.toLowerCase()) ||   blog.title.toLowerCase().includes(search.toLowerCase())
        ) // Output logic
);

// Export reducer
export default dataSlice.reducer;

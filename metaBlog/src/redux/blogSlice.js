import { createSlice, createSelector } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    blogs: [],
    search: "",
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Create slice
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload; // Update search term
        },
        fetchBlogsStart: (state) => {
            state.status = "loading"; // Start loading
        },
        fetchBlogsSuccess: (state, action) => {
            state.status = "succeeded";
            state.blogs = action.payload; // Update blogs data
        },
        fetchBlogsFailure: (state, action) => {
            state.status = "failed";
            state.error = action.payload; // Update error message
        },
    },   
});

// Export actions
export const { setSearch, fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure } =
    dataSlice.actions;

// **Memoized selector for filtered data**
export const filteredData = createSelector(
    [(state) => state.data.blogs, (state) => state.data.search], // Input selectors
    (blogs, search) =>
        blogs.filter(
            (blog) =>
                blog.author.toLowerCase().includes(search.toLowerCase()) || // Filter by author
                blog.title.toLowerCase().includes(search.toLowerCase())     // Filter by title
        )
);

// Export reducer
export default dataSlice.reducer;

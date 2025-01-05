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
            state.status = "loading"; 
        },
        fetchBlogsSuccess: (state, action) => {
            state.status = "succeeded";
            state.blogs = action.payload;
        },
        fetchBlogsFailure: (state, action) => {
            state.status = "failed";
            state.error = action.payload; 
            state.blogs = []; // Ensure fallback to empty array
        },
        
    },   
});


export const { setSearch, fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure } =
    dataSlice.actions;

// **Memoized selector for filtered data**
export const filteredData = createSelector(
    [(state) => state.data.blogs || [], (state) => state.data.search], // Fallback to empty array
    (blogs, search) =>
        blogs.filter(    
            (blog) =>
                blog.author.toLowerCase().includes(search.toLowerCase()) ||
                blog.title.toLowerCase().includes(search.toLowerCase())     
        )
);


// Export reducer
export default dataSlice.reducer;

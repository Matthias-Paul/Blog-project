import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    search: "",
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};


const dataSlice = createSlice({
    name: "data",
    initialState,    
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload; 
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
        addBlog: (state, action) => {
            state.blogs.push(action.payload); // Add new blog
        }
    },   
});

export const { setSearch, fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure, addBlog } =
    dataSlice.actions;

// **Memoized selector for filtered data**
export const filteredData = createSelector(
    [(state) => state.data.blogs || [], (state) => state.data.search], // Fallback to empty array
    (blogs, search) =>
        blogs.filter(    
            (blog) =>
                blog.author?.toLowerCase().includes(search.toLowerCase()) ||
                blog.title.toLowerCase().includes(search.toLowerCase())     
        )
);

export default dataSlice.reducer;
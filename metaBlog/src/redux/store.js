import {configureStore } from "@reduxjs/toolkit"
import themeSlice  from "./themeSlice.js"
import dataSlice from "./blogSlice.js"

 const store = configureStore({
    reducer:{
        theme:themeSlice,
        data:dataSlice,
    },
})
export default store;
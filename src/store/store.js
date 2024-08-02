import {configureStore} from "@reduxjs/toolkit";
import getPostsSlice   from "../reducer/getPostsSlice.js";

const store = configureStore({
    reducer:{
        getPostsSlice
    }

})
export default store
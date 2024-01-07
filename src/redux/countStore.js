import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const countStore = configureStore({
    reducer: {
        count: countSlice
    }
})

export default countStore;
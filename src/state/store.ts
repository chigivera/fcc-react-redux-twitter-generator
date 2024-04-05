import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quote/quote.ts"


export const store = configureStore({
    reducer:{
        quote : quoteReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
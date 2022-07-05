import { configureStore } from "@reduxjs/toolkit";

import boardSlice from "./boardSlice";

const store = configureStore({
    reducer: {
        board: boardSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

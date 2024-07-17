import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from '../features/movie/movieSlide'


const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat()
    }
})


export default store
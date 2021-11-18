import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import { filtersReducer } from './filtersReducer';


export const rootReducer = combineReducers({
    movies: moviesReducer,
    filters: filtersReducer
})

export type RootState = ReturnType<typeof rootReducer>
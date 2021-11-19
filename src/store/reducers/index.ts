import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import { filtersReducer } from './filtersReducer';
import { currentPageReducer } from './currentPageReducer';


export const rootReducer = combineReducers({
    movies: moviesReducer,
    filters: filtersReducer,
    page: currentPageReducer,
})

export type RootState = ReturnType<typeof rootReducer>
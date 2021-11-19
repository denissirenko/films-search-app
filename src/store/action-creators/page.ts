import {MoviesAction, MoviesActionTypes} from "../../types/movies";
import {Dispatch} from "redux";

export const fetchPage = (page:number) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        dispatch({type: MoviesActionTypes.FETCH_CURRENT_PAGE, payload: page})
    }
}
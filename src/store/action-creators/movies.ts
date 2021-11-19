import { root, api_key_3 } from '../../api/config'

import {MoviesAction, MoviesActionTypes} from "../../types/movies";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchMovies = (params:string, page:number) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({type: MoviesActionTypes.FETCH_MOVIES})
            const response = await axios.get(`${root}/discover/movie?api_key=${api_key_3}&language=ru-RU&sort_by=${params}&page=${page}`)         
            dispatch({type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: response.data.results})
            dispatch({type: MoviesActionTypes.FETCH_CURRENT_PAGE, payload: response.data.page})
        } catch (e) {
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: 'Произошла ошибка при загрузке'
            })
        }
    }
}
import { CurrentPageState } from '../../types/currentPage';
import { MoviesAction, MoviesActionTypes } from '../../types/movies';

const initialState: CurrentPageState = {
    page: 1
}

export const currentPageReducer = (state = initialState, action: MoviesAction): CurrentPageState => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_CURRENT_PAGE:
            return { page: action.payload }
        default: 
            return state
    }
}
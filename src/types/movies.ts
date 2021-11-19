export interface MoviesState {
    movies: any[];
    loading: boolean;
    error: null | string;
}
export enum MoviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    FETCH_CURRENT_PAGE = 'FETCH_CURRENT_PAGE',
}
interface FetchMoviesAction {
    type: MoviesActionTypes.FETCH_MOVIES;
}
interface FetchMoviesSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
    payload: any[]
}
interface FetchMoviesErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR;
    payload: string;
}
interface FetchCurrentPageAction {
    type: MoviesActionTypes.FETCH_CURRENT_PAGE;
    payload: number;
}
export type MoviesAction = FetchMoviesAction | FetchMoviesSuccessAction | FetchMoviesErrorAction | FetchCurrentPageAction
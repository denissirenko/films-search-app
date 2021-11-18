import { FiltersAction, FiltersActionTypes} from "../../types/filters";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchFilters = (filters:string) => {
    return async (dispatch: Dispatch<FiltersAction>) => {
        dispatch({type: FiltersActionTypes.FILTERS, payload: filters})
    }
}
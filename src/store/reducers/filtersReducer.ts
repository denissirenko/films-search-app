import { FiltersState, FiltersActionTypes, FiltersAction } from '../../types/filters';

const initialState: FiltersState = {
    filters: "popularity.desc"
}

export const filtersReducer = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type) {
        case FiltersActionTypes.FILTERS:
            return { filters: action.payload }
        default: 
            return state
    }
}
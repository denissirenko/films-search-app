export interface FiltersState {
    filters: string;
}
export enum FiltersActionTypes {
    FILTERS = 'FILTERS',
}
interface FetchFiltersSuccessAction {
    type: FiltersActionTypes.FILTERS;
    payload: string
}
export type FiltersAction = FetchFiltersSuccessAction 
import * as MoviesActionCreators from './movies';
import * as FiltersActionCreators from './filters'

export default {
    ...MoviesActionCreators,
    ...FiltersActionCreators,
}
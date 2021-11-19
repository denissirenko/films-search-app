import * as MoviesActionCreators from './movies';
import * as FiltersActionCreators from './filters';
import * as PageActionCreators from './page';

export default {
    ...MoviesActionCreators,
    ...FiltersActionCreators,
    ...PageActionCreators
}
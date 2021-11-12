import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import { MoviesListItem } from './MoviesListItem';

export const MoviesList: FC = () => {
    const  { movies, error, loading } = useTypedSelector( state => state.movies);
    const { fetchMovies } = useActions();
    useEffect(() => {
        fetchMovies()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {movies?.map(movie =>
                <MoviesListItem 
                    key={movie.id} 
                    backdrop_path={movie.backdrop_path}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                />
            )}
        </div>
    );
}
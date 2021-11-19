import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import { PaginationUI } from './Pagination';

import { MoviesListItem } from './MoviesListItem';

import { Row, Spin, Space } from 'antd';

export const MoviesList: FC = () => {
    const  { movies, error, loading } = useTypedSelector( state => state.movies);
    const  { filters } = useTypedSelector( state => state.filters);
    const  { page } = useTypedSelector( state => state.page);
    const { fetchMovies } = useActions();
    useEffect(() => {
        fetchMovies(filters, page)
    }, [filters, page])

    if (loading) {
        return (
            <Space size="middle">
                <Spin size="large" />
            </Space>
        )
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Row className='CardWrapper'>
            {movies?.map(movie =>
                <MoviesListItem 
                    key={movie.id} 
                    backdrop_path={movie.backdrop_path}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                />
            )}
            <PaginationUI />
        </Row>
    );
}
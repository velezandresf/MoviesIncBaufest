import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { movieDBGet } from '../api/movieDB'
import { Movie, MovieDBResponse } from '../interfaces/movieInterface'

export const useMoviesHome = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDBGet.get<MovieDBResponse>('/now_playing');
        
        setMoviesState(resp.data.results);

        setIsLoading(false);
    } 

    useEffect(() => {
        getMovies();
    }, [])

    return ({
        isLoading,
        moviesState
    })
}

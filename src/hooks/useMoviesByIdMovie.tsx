import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {movieDBGet} from '../api/movieDB'
import { Movie, MovieDBResponse } from '../interfaces/movieInterface'


export const useMoviesByIdMovie = (movieId: number, routeName: string) => {

    const[isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<Movie[]>([]);

    const getMoviesDetails = () => {

        movieDBGet.get<MovieDBResponse>(`/${movieId}/${routeName}`)
            .then((response) => {
                setMoviesState(response.data.results);
            }, (error) => {
                console.log(`/${movieId}/${routeName}`)
                console.log(error.response.data.status_message)       
            });

        setIsLoading(false);
    } 

    useEffect(() => {
        getMoviesDetails();
    }, [])

    return ({
        moviesState,
        isLoading
    })
}

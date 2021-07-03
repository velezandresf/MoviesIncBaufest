import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {movieDBGet} from '../api/movieDB'
import { MovieDetails } from '../interfaces/movieDetailsInterface';

export const useMovieDetail = (movieId: number) => {

    const[isLoading, setIsLoading] = useState(true);
    const [detailState, setDetailsState] = useState<MovieDetails>();

    const getMoviesDetails = async () => {
        const resp = await movieDBGet.get<MovieDetails>(`/${movieId}`);
        
        setDetailsState(resp.data);

        setIsLoading(false);
    } 

    useEffect(() => {
        getMoviesDetails();
    }, [])

    return ({
        detailState,
        isLoading
    })
}

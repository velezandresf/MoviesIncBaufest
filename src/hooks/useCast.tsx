import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {movieDBGet} from '../api/movieDB'
import { Cast, MovieCredits } from '../interfaces/movieCastInterface'

export const useCast = (movieId: number) => {

    const[isLoading, setIsLoading] = useState(true);
    const [castState, setCastState] = useState<Cast[]>([]);

    const getCastDetails = async () => {
       
        const result = await movieDBGet.get<MovieCredits>(`/${movieId}/credits`);
        setCastState(result.data.cast);
        setIsLoading(false);
    } 

    useEffect(() => {
        getCastDetails();
    }, [])

    return ({
        castState,
        isLoading
    })
}

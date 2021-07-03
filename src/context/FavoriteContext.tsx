import React, {createContext, useReducer } from "react"
import { FavoriteState, FavoriteContextProps } from "../interfaces/favoriteContextInterface";
import { favoriteReducer } from "./FavoriteReducer";

export const FavoriteInitialState: FavoriteState[] = []

export const FavoriteContext = createContext( {} as FavoriteContextProps );

export const FavoriteProvider = ({ children }: any) => {

    const [favoriteState, dispatch] = useReducer(favoriteReducer, FavoriteInitialState)

    const addFavorite = (movieId: number, title:string, movieImageURI: string) => {
        console.log('adding favorite');
        dispatch({ 
            type: 'add', 
            payload: {movieId, title, movieImageURI} 
        });
    }

    return (
        <FavoriteContext.Provider value={{ 
            favoriteState,
            addFavorite
         }}>
            { children }
        </FavoriteContext.Provider>
    )
}
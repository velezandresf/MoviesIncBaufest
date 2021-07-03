import { FavoriteState } from '../interfaces/favoriteContextInterface';
import { Alert } from 'react-native';

interface Payload {
    title: string;
    movieId: number;
    movieImageURI: string;
}

type FavoriteAction = 
    | {type: 'add', payload: Payload }
    | {type: 'remove', payload: Payload }
;

export const favoriteReducer = (state: FavoriteState[], action:FavoriteAction): FavoriteState[] => {

    switch ( action.type) {
        case 'add':
            if (state.some(movie => movie.movieId === action.payload.movieId)) {
                Alert.alert(
                    "Favoritos",
                    "Ya se encuentra registrada la pelicula en favoritos"
                )
                return state
            }
            else{
                Alert.alert(
                    "Favoritos",
                    "Se ha agregado la pelicula a favoritos"
                )
                return (
                    state.concat(action.payload)
                )
            }
        case 'remove':
            return {
                ...state
            }
        default:
            return state
        
        return state;
    }
}
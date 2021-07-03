import { FavoriteState } from '../interfaces/favoriteContextInterface';

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
                return state
            }
            else{
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
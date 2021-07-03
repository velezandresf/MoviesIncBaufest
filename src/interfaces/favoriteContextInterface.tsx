export interface FavoriteState {
    movieId?: number,
    movieImageURI?: string,
    title?: string
}

export interface FavoriteContextProps {
    favoriteState: FavoriteState[];
    addFavorite: (movieId: number, title:string, movieImageURI:string) => void;
}
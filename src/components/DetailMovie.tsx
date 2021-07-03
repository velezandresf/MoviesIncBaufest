import React from 'react'
import { Cast } from '../interfaces/movieCastInterface';
import { MovieDetails } from '../interfaces/movieDetailsInterface';
import { View, Text, StyleSheet , FlatList} from 'react-native';
import { CastMovie } from './CastMovie';
import { StarRating } from './StarRating';
import { Movie } from '../interfaces/movieInterface';
import { ListMovies } from './ListMovies';

interface Props {
    movieDetails: MovieDetails;
    cast: Cast[];
    recommedations: Movie[];
    similar: Movie[];
}

export const DetailMovie = ({movieDetails, cast, recommedations, similar}: Props ) => {

    return (
        <View style={styles.container}>
            <Text>title: {movieDetails.title}</Text>
            <Text>Release date: {movieDetails.release_date}</Text>
            <Text>Description: {movieDetails.overview}</Text>
            <Text>Genres: {movieDetails.genres.map((item) => item.name).join(', ')}</Text>
            <Text>Popularity: {movieDetails.vote_average}</Text>

            <Text style={styles.Title}>CASTING</Text>
            <View style={styles.casting}>
                <FlatList 
                    data={ cast }
                    renderItem={(item: {item: Cast}) => <CastMovie cast ={item.item} /> }
                    keyExtractor = {(item) => item.id.toString()}
                    horizontal= {true}
                />
            </View>
            

            <Text style={styles.Title}>RATING</Text>
            <StarRating
                maxStars={10}
                rating={Math.floor(movieDetails.vote_average)}
                movieId={movieDetails.id}
            />

            {/* TODO  -- is ready the component movieposter but the flatlist inside listmovie is not rendering yet.*/}
            <ListMovies title="RECOMENDED MOVIES" movies={recommedations}/>
            <ListMovies title="SIMILAR MOVIES" movies={similar}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20
    },
    casting: {
        height:70,
        alignItems: 'center'
    },
    Title: {
        fontSize:18,
        fontWeight: 'bold',
        marginTop: 10
    }
})
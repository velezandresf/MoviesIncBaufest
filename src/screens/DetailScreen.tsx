import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { View, Image, ScrollView, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { NavStackParams } from '../navigation/Navigation';
import { DetailMovie } from '../components/DetailMovie';
import { useMoviesByIdMovie } from '../hooks/useMoviesByIdMovie';
import { useCast } from '../hooks/useCast';
import { FavoriteContext } from '../context/FavoriteContext';

interface Props extends StackScreenProps<NavStackParams, 'DetailScreen'>{};

const {height} = Dimensions.get('screen');

export const DetailScreen = ({route, navigation}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {isLoading, detailState: movieDetail } = useMovieDetail(movie.id);
    const {castState} = useCast(movie.id)
    const {moviesState: movieRecommendations} = useMoviesByIdMovie(movie.id, 'recommendations');
    const {moviesState: movieSimilar} = useMoviesByIdMovie(movie.id, 'similar');

    const { addFavorite, favoriteState } = useContext(FavoriteContext);
    
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    style={ styles.imagePoster}
                    source={{uri}}
                />
                <TouchableOpacity 
                    style={styles.favoriteButton}
                    onPress={() => addFavorite(movie.id, movie.title, movie.poster_path)}
                >
                    
                    <Image 
                        source={require('../assets/images/heart.png')} 
                        resizeMode='contain'  
                        style={styles.favoriteImage}/>
                </TouchableOpacity>
            </View>
            
            {
                isLoading 
                ? 
                    <ActivityIndicator 
                        size={100}
                        color = 'red'
                    />
                : 
                    <View>
                        <DetailMovie 
                            movieDetails={movieDetail!} 
                            cast={castState} 
                            recommedations={movieRecommendations!}
                            similar ={movieSimilar!}
                        />

                    </View>

            }        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: height * 0.5
    },
    imagePoster: {
        flex:1
    },
    favoriteButton:{
        flex:1,
        position: 'absolute',
        width:'100%',
        height:80,
        alignContent: 'flex-end',
        flexDirection:'row-reverse',
        top:10,
        right:10,
    },
    favoriteImage:{
        width:45,
        height:45,
    }
})
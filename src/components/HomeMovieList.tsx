import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { FavoriteContext } from '../context/FavoriteContext'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
}

export const HomeMovieList = ({movie}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();
    const { addFavorite, favoriteState } = useContext(FavoriteContext);

    return (
        <TouchableOpacity
            style = {styles.container}
            onPress= { () => navigation.navigate('DetailScreen', movie)}
            activeOpacity= {0.5}
        >
            <View style={styles.container}>
                <Image 
                    style = {styles.image }
                    source = {{uri}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{movie.title}</Text>
                    <Text style={styles.text}>Release Date: {movie.release_date}</Text>
                    <Text style={styles.text}>Vote Average: {movie.vote_average}</Text>
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
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginRight: 15
    },
    textContainer: {
        flex:1,
        flexDirection: 'column',
    },
    titleText: {
        fontSize: 18,
        fontWeight:'bold'
    },
    text:{
        fontSize: 18
    },
    favoriteButton:{
        flex:1,
        width:'100%',
    },
    favoriteImage:{
        width:30,
        height:30,
    }
})
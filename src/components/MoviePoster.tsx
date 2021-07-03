import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style = {styles.container}
            onPress= { () => navigation.push('DetailScreen', movie)}  //typescript doesn't have push, but navigation works with it.
            activeOpacity= {0.5}
        >
            <View style={styles.container}>
                <Image 
                    style = {styles.image }
                    source = {{uri}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,

        width:150,
        height:200
    
    },
    image: {
        width:140,
        height:200,
        borderRadius: 20,
        marginRight: 15
    }
})
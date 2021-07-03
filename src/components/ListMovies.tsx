import React from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieInterface';

interface Props{
    title: string,
    movies: Movie[];
}

export const ListMovies = ({movies, title}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>{title}</Text>
            <FlatList   
                data={ movies }
                renderItem={(item: {item: Movie}) => <MoviePoster movie ={item.item} /> }
                keyExtractor = {(item) => item.id.toString()}
                horizontal= {true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:300,
        marginBottom: 20
        
    },
    Title: {
        flex: 1,
        marginTop: 5,
        fontWeight:'bold',
        fontSize:18,
        marginLeft: 20
    }
})
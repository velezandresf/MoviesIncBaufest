import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useMoviesHome } from '../hooks/useMoviesHome';
import { Movie } from '../interfaces/movieInterface';
import { HomeMovieList } from '../components/HomeMovieList';

export const HomeScreen = () => {

    const {isLoading, moviesState} = useMoviesHome();
    

    if (isLoading){
        return (
            <View style={styles.loading}>
                <ActivityIndicator 
                    color= 'red' 
                    size = { 100} />
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            <FlatList
                data={ moviesState.sort( (a,b) =>  a.title.localeCompare(b.title)) }
                renderItem={(item: {item: Movie}) => <HomeMovieList movie ={item.item} /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
        flex: 1,
    }
})
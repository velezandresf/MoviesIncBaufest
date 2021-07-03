
import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { FavoriteState } from '../interfaces/favoriteContextInterface'

interface Props {
    favorite: FavoriteState;
}

export const ListFavorites = ({favorite}: Props) => {

    console.log(favorite)

    const uri = `https://image.tmdb.org/t/p/w500${favorite.movieImageURI}`;


    return (

            <View style={styles.container}>
                <Image 
                    style = {styles.image }
                    source = {{uri}}
                />
                <Text style={styles.text}>{favorite.title}</Text> 
                    
            </View>
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
    text: {
        fontSize: 18
    }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/movieCastInterface';

interface Props{
    cast: Cast
}

export const CastMovie = ({cast}: Props) => {
    return (
       <View style={styles.container}>
            <View style={styles.actorInfo}>
                <Text> {cast.name}</Text>
                <Text> {cast.character}</Text>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'gray',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
        marginRight: 10,
        marginTop: 5,
        
        
    },
    actorInfo: {

        marginTop: 4
    }
})
import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ListFavorites } from '../components/ListFavorites';
import { FavoriteContext } from '../context/FavoriteContext';
import { FavoriteState } from '../interfaces/favoriteContextInterface';

export const FavoriteScreen = () => {

    const { top } = useSafeAreaInsets();
    const { favoriteState } = useContext( FavoriteContext );
    
    // console.log(favoriteState);

    return (
        <View style={{ marginTop: top, flex:1 }}>
            <Text style={styles.title}> FAVORITES </Text>
           <FlatList 
                data={ favoriteState }
                renderItem={(item: {item: FavoriteState}) => <ListFavorites favorite={item.item}/> }
                keyExtractor = {(item) => item.movieId!.toString()}
            />
        
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        top:10,
        marginBottom:15,
        fontSize: 30

    }
})

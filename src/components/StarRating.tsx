import React, { useState }  from 'react'
import { TouchableOpacity, View, StyleSheet, Alert , Image} from 'react-native';
import {movieDBPost} from '../api/movieDB';

interface Props {
    maxStars: number;
    rating: number;
    movieId: number;
}
export const StarRating = ({maxStars, rating, movieId}: Props) => {

    const [stars, setStars ] = useState(rating);
    const [auxStars, setAuxStars ] = useState(rating);
    const [maxRating, setMaxRating] = useState(Array.from({length: maxStars}, (_, i) => i + 1));

    const [error, setError] = useState(undefined)
    
    const updateRating = (starsCount: number) => {
        
        movieDBPost.post(
            `/${movieId}/rating`, 
            {value: starsCount}
        )
            .then((response) => {
                setAuxStars(starsCount);
            }, (error) => {
                setError(error.response.data.status_message);
                setStars(auxStars);
                Alert.alert(
                    "ERROR",
                    error.response.data.status_message
                )
            });

            setStars(starsCount);
    }

    return (    
        <View style={styles.container}>
            {
                maxRating.map((item, key) => {
                    return(
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress = {() => updateRating(item)}
                        >
                            <View>
                                {item <= stars
                                ? <Image style={styles.star} source={require('../assets/images/star_filled.png')} />
                                : <Image style={styles.star} source={require('../assets/images/star_corner.png')} />
                            }
                            </View>
                            
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10
    },
    star: {
        height:30,
        width:30,
    }
})
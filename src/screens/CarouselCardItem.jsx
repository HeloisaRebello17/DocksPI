import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { styles } from '../config/styles'




export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const SLIDER_HEIGHT = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.28)
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.29)





const CarouselCardItem = ({ item, index }) => {
    console.log(item);
    return (
        <View style={{backgroundColor: 'white',
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingBottom: 40,}} key={index}>
            <Text style={{color: "#222",
    backgroundColor: "#2250",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
}}>{item.title}</Text>
            <Text style={{color: "#222",
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20}}>{item.body}</Text>
        </View>

    )

}



//adicionar outra view e colocar cor

export default CarouselCardItem


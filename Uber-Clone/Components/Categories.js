import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const images = {
    pick_up: require("../assets/images/shopping-bag.png"),
    fast_food: require("../assets/images/fast-food.png"),
    backery_items: require("../assets/images/bread.png"),
    soft_drinks: require("../assets/images/soft-drink.png")
}
export default function Categories() {
    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Image source={images.pick_up} style={styles.image} />
                <Text style={styles.text}>Pick-Up</Text>
            </View>
            <View style={styles.category}>
                <Image source={images.soft_drinks} style={styles.image} />
                <Text style={styles.text}>Soft Drinks</Text>
            </View>
            <View style={styles.category}>
                <Image source={images.backery_items} style={styles.image} />
                <Text style={styles.text}>Backery Items</Text>
            </View>
            <View style={styles.category}>
                <Image source={images.fast_food} style={styles.image} />
                <Text style={styles.text}>Fast Foods</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 10,
    },
    image: {
        height: 55,
        width: 55,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    category: {
        padding: 15,
        alignItems: 'center',
    }
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function SearchBar() {
    return (
        <View style={[styles.container]}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    }
                }}
                renderLeftButton={() => (
                    <View>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => {
                    return (
                        <View style={styles.rightButton}>
                            <AntDesign name="clockcircle" size={24} style={{ marginRight: 10 }} />
                            <Text>Search</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
    },
    rightButton: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        fontWeight: 'bold',
    }

})
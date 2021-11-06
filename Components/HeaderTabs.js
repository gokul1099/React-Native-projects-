import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HeaderTabs() {
    const [active, setActive] = React.useState("Delivery")
    return (
        <View style={styles.Container}>
            <HeaderButton text="Delivery" activeTab={active} setActive={setActive} />
            <HeaderButton text="PickUp" activeTab={active} setActive={setActive} />
        </View>
    )
}

const HeaderButton = (props) => (

    <TouchableOpacity style={[styles.touchable, { backgroundColor: props.activeTab === props.text ? "black" : "white" }]}
        onPress={() => props.setActive(props.text)}>
        <Text style={[styles.btnText, { color: props.activeTab === props.text ? "white" : "black" }]}>
            {props.text}
        </Text>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    touchable: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

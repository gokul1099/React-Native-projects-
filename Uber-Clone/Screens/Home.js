import React from "react";
import { View, Text } from 'react-native'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'

export default function Home() {
    return (
        <View>
            <HeaderTabs />
            <SearchBar />
        </View>
    )
}

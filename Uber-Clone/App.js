import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import Categories from "./Components/Categories";
import Home from "./Screens/Home"

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Home />
      </View>
      <Categories />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0
  },
  container: {
    backgroundColor: "white",
    padding: 15,
  }
})

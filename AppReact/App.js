import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Meu primeiro app com React Native!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff'
  }
});

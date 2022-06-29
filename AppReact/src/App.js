import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native'

const App = () => {
    return ( 
      <SafeAreaView style = {style.container}>
        <StatusBar backgroundColor={'pink'} barStyle='dark-content' />
      <View style = {style.container}>
      <Text style = {style.text}>Hello Wolrd</Text>
    </View>
      </SafeAreaView>
    );
  };

  export default App;

  const style = StyleSheet.create({
    container: {
      backgroundColor: 'pink',
      flex: 1, //Expandir para tela inteira
    },
    text:{
      fontSize: 50,
      fontWeight: 'bold',
      color: 'black',
    }
  }) 
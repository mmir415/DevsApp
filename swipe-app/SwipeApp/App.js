import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TestComponent} from './testComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app, dawg!</Text>
      {/* Instantiating multiple instances of the component */}
      <TestComponent name={'Nik'} age={20}/>
      <TestComponent name={'Sean'} age={12}/>
      <TestComponent name={'Ben'} age={40}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'pink',
    justifyContent:'center',
    alignItems:'center'
  }
})

import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarList from './components/carList/carListIndex'
import Header from './components/Header/headerIndex'
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

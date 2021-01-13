import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
//import Header from './src/Header';
// import Home from './src/Home';
import Routes from './src/Routes'

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular, OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Header></Header> */}
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#DA5C5C',
    backgroundColor: '#abd9c6',
    height: '100 %'

  },
});

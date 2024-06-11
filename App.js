import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/InnoApps/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'gray',
  },
  welText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 20,
  },
});

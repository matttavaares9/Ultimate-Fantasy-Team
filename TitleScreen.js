// TitleScreen.js

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const TitleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ULTIMATE</Text>
      <Text style={styles.title}>FANTASY TEAM</Text>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => navigation.navigate('MainTabs', { screen: 'HomeScreen' })}
      >
        <Text style={styles.playButtonText}>PLAY NOW!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // assuming black background from screenshot
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'gold', // assuming gold color from screenshot
    fontSize: 34, // choose the best size that fits your design
    fontWeight: 'bold',
    letterSpacing: 2, // adjust as necessary for your design
  },
  playButton: {
    backgroundColor: 'white', // assuming white button background from screenshot
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    borderRadius: 25, // adjust for rounded corners
  },
  playButtonText: {
    color: 'black', // assuming black text color from screenshot
    fontSize: 20, // choose the best size that fits your design
    fontWeight: 'bold',
  },
});

export default TitleScreen;


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const TitleScreen = ({ navigation }) => {
    console.log('Navigation props:', navigation); // Check if navigation is being passed correctly
    const goToHomeScreen = () => {
      if (navigation) {
        navigation.navigate('HomeScreen');
      } else {
        console.warn('Navigation prop is not available!');
      }
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>FANTASY ULTIMATE TEAM</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={goToHomeScreen}>
        <Text style={styles.buttonText}>PLAY NOW!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 28,
      color: "#D8AF1F",
    },
    buttonContainer: {
      marginTop: 20,
      backgroundColor: '#e0e0e0',
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 16,
      color: 'black', // Gold color of the text
      textAlign: 'center', // Center align the text within the TouchableOpacity
    },
  });

export default TitleScreen;



/*
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('TitleScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FANTASY ULTIMATE TEAM</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Hello World!')}>
        <Text style={styles.buttonText}>PLAY NOW!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 28,
    color: "#D8AF1F",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black', // Gold color of the text
    textAlign: 'center', // Center align the text within the TouchableOpacity
  },
});
*/
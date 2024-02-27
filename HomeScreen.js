
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TitleScreen from './TitleScreen';

const HomeScreen = ({ navigation }) => {
  const goToTitleScreen = () => {
    navigation.navigate('TitleScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME SCREEN</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={goToTitleScreen}>
        <Text style={styles.buttonText}>RETURN TO TITLE SCREEN</Text>
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

export default HomeScreen;
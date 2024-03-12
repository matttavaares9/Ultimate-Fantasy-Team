
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bench from './Bench';

const HomeScreen = ({ navigation }) => {
  const goToBench = () => {
    navigation.navigate('Bench');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CHOOSE YOUR LINEUP</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={goToBench}>
        <Text style={styles.buttonText}>GO TO BENCH</Text>
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

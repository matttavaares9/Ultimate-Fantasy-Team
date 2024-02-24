import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
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

import React from 'react';
import { View, Button, ScrollView, Text, StyleSheet } from 'react-native'; // or 'react' for web

const HomeScreen = ({ navigation }) => {
  // Dummy data for player stats
  const playersStats = [
    { name: 'Player 1', pts: '10', reb: '5', ast: '7', stl: '2', blk: '1' },
    { name: 'Player 2', pts: '15', reb: '3', ast: '5', stl: '1', blk: '0' },
    { name: 'Player 3', pts: '20', reb: '10', ast: '2', stl: '1', blk: '2' },
    { name: 'Player 4', pts: '20', reb: '10', ast: '2', stl: '1', blk: '2' },
    { name: 'Player 5', pts: '20', reb: '10', ast: '2', stl: '1', blk: '2' },
  ];

  // Function to navigate to Bench.js
  const goToBench = () => {
    navigation.navigate('Bench');
  };

  return (
    <View style={styles.container}>
      <View style={styles.lineupContainer}>
        {/* map over your players or positions here to create buttons */}
        <Button title="PG" onPress={goToBench} />
        { }
        <Button title="SG" onPress={goToBench} />
        { }
        <Button title="SF" onPress={goToBench} />
        { }
        <Button title="PF" onPress={goToBench} />
        { }
        <Button title="C" onPress={goToBench} />
        { }
      </View>
      <ScrollView vertical style={styles.statsContainer}>
        {/* map over the playersStats to create scrollable stat lines */}
        {playersStats.map((player) => (
          <View key={player.name} style={styles.playerStat}>
            <Text>{player.name} [{player.pts}] pts, {player.reb} reb, {player.ast} ast, {player.stl} stl, {player.blk} blk</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles for the container
  },
  lineupContainer: {
    // styles for the lineup part
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  statsContainer: {
    // styles for the stats container
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  playerStat: {
    // styles for individual player stat line
  },
  // ... additional styles
});

export default HomeScreen;

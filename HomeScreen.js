import React from 'react';
import { View, ImageBackground, TouchableOpacity, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  // Dummy data for player stats
  const playersStats = [
    { name: 'Player 1', F_pts: '21', pts: '10', reb: '5', ast: '7', stl: '2', blk: '1' },
    { name: 'Player 2', F_pts: '15', pts: '8', reb: '3', ast: '4', stl: '1', blk: '0' },
    { name: 'Player 3', F_pts: '10', pts: '5', reb: '2', ast: '3', stl: '1', blk: '0' },
    { name: 'Player 4', F_pts: '43', pts: '45', reb: '2', ast: '3', stl: '1', blk: '0' },
    { name: 'Player 5', F_pts: '14', pts: '5', reb: '2', ast: '3', stl: '1', blk: '0' },
  ];

  // Function to navigate to Bench.js
  const goToBench = () => {
    navigation.navigate('Bench');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ACTIVE LINEUP</Text>
      </View>
      <View style={styles.courtContainer}>
        <ImageBackground
          source={require('./assets/court.png')}
          resizeMode="stretch"
          style={styles.courtImage}
        >
          <TouchableOpacity style={[styles.positionButton, styles.pgPosition]} onPress={goToBench}>
            <Text>PG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.positionButton, styles.sgPosition]} onPress={goToBench}>
            <Text>SG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.positionButton, styles.sfPosition]} onPress={goToBench}>
            <Text>SF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.positionButton, styles.pfPosition]} onPress={goToBench}>
            <Text>PF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.positionButton, styles.cPosition]} onPress={goToBench}>
            <Text>C</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>ACTIVE STAT LINE</Text>
      </View>
      <ScrollView vertical style={styles.statsContainer}>
        {playersStats.map((player) => (
          <View key={player.name} style={styles.playerStat}>
            <Text style={styles.statText}>{player.name} [{player.F_pts}]</Text>
            <Text style={styles.statText}>{player.pts} pts, {player.reb} reb, {player.ast} ast, {player.stl} stl, {player.blk} blk</Text>

          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}><Text>MY TEAM</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text>PACKS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text>MATCHUP</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text>LEAGUE</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const buttonWidth = width * 0.18; // 18% of the screen width
const buttonHeight = height * 0.08; // 8% of the screen height
const footerHeight = height * 0.1; // 10% of the screen height
const buttonSize = 60; // The size of the buttons
const courtPadding = 20; // The padding inside the courtContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  courtContainer: {
    flex: 1,
    flexDirection: 'row',
    height: buttonHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#F8F8F8',
  },
  courtImage: {
    // Absolute positioning to fill the courtContainer
    position: 'absolute',
    top: 0, // Adjust this as needed to lower the image
    left: 0,
    right: 0,
    bottom: 0, // Adjust this as needed to lower the image
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  positionButton: {
    width: buttonWidth,
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },
  pgPosition: {
    top: '35%',
    left: '43%',
  },
  sgPosition: {
    top: 50, // Adjust accordingly
    right: 30,
  },
  sfPosition: {
    top: 50, // Adjust accordingly
    left: 120,
  },
  pfPosition: {
    bottom: 80, // Adjust accordingly
    right: 150,
  },
  cPosition: {
    bottom: 80,
    right: 100, // Center horizontally
  },
  statsContainer: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  playerStat: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  statText: {
    fontSize: width * 0.04, // Font size as a percentage of the screen width
  },
  footer: {
    height: footerHeight,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#808080',
  },
  footerButton: {
    width: buttonWidth,
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

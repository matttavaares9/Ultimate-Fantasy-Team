import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const calculateFantasyPoints = (pts, reb, ast, stl, blk) => {
  // Standard NBA fantasy points system calculations
  return pts + (reb * 1.2) + (ast * 1.5) + (stl * 3) + (blk * 3);
};

const HomeScreen = ({ navigation }) => {
  // Dummy data for player stats
  const [playersStats, setPlayersStats] = useState([
    { name: 'Jalen Brunson', pts: '39', reb: '2', ast: '4', stl: '0', blk: '0', image: require('./assets/Brunson.png') },
    { name: 'Devin Booker', pts: '37', reb: '1', ast: '4', stl: '1', blk: '1', image: require('./assets/Booker.png') },
    { name: 'Demar DeRozan', pts: '39', reb: '4', ast: '7', stl: '3', blk: '0', image: require('./assets/Demar.png') },
    { name: 'Paolo Banchero', pts: '20', reb: '6', ast: '6', stl: '1', blk: '0', image: require('./assets/Paolo.png') },
    { name: 'Nikola Jokic', pts: '41', reb: '11', ast: '7', stl: '3', blk: '0', image: require('./assets/Jokic.png') },
  ]);

  // Effect to calculate fantasy points based on stats
  useEffect(() => {
    const updatedStats = playersStats.map(player => {
      const fantasyPoints = calculateFantasyPoints(
        parseInt(player.pts),
        parseInt(player.reb),
        parseInt(player.ast),
        parseInt(player.stl),
        parseInt(player.blk)
      );
      return { ...player, F_pts: fantasyPoints.toFixed(1) };
    });
    setPlayersStats(updatedStats);
  }, []);

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
          {playersStats.map((player, index) => (
            <TouchableOpacity
              key={player.name}
              style={[styles.positionButton, styles[`position${index + 1}`]]}
              onPress={goToBench}
            >
              <Image source={player.image} style={styles.playerImage} />
            </TouchableOpacity>
          ))}
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
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}><Text>MY TEAM</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Packs')}><Text>PACKS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Matchup')}><Text>MATCHUP</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('League')}><Text>LEAGUE</Text></TouchableOpacity>
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
  },
  playerImage: {
    width: '150%',
    height: '150%',
    resizeMode: 'contain'
  },
  position1: {
    position: 'absolute',
    top: height * 0.3, // Adjust these values
    left: width * 0.4, // Adjust these values
  },
  position2: {
    position: 'absolute',
    top: height * 0.2, // Adjust these values
    left: width * 0.7, // Adjust these values
  },
  position3: {
    position: 'absolute',
    top: height * 0.2, // Adjust these values
    left: width * 0.1, // Adjust these values
  },
  position4: {
    position: 'absolute',
    top: height * 0.08, // Adjust these values
    left: width * 0.62, // Adjust these values
  },
  position5: {
    position: 'absolute',
    top: height * 0.08, // Adjust these values
    left: width * 0.22, // Adjust these values
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

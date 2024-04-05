import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const Matchup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>MATCHUP</Text>
            <View style={styles.teamsContainer}>
                <View style={[styles.team, styles.border]}>
                    <Image source={require('./assets/knicks.png')} style={styles.logo} />
                    <Text style={styles.teamText}>TEAM 1</Text>
                    <Text style={styles.overallText}>OVR: X</Text>
                </View>
                <View style={[styles.team, styles.border]}>
                    <Image source={require('./assets/celtics.png')} style={styles.logo} />
                    <Text style={styles.teamText}>TEAM 2</Text>
                    <Text style={styles.overallText}>OVR: X</Text>
                </View>
            </View>
            <View style={[styles.scoreContainer, styles.border]}>
                <Text style={styles.scoreText}>XXX - XXX</Text>
            </View>
            <View style={[styles.playerInfoContainer, styles.border]}>
                <Text style={styles.playerInfoText}>PLAYER INFO</Text>
                {/* Additional player info would go here */}
            </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    team: {
        alignItems: 'center',
        flex: 1, // Makes the team boxes equal width
    },
    border: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginVertical: 10,
    },
    teamText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    overallText: {
        fontSize: 16,
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    scoreText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    playerInfoContainer: {
        width: width * 0.9,
        height: 200,
        marginVertical: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerInfoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: footerHeight,
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

export default Matchup;

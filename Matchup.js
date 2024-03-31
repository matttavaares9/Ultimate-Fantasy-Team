import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Matchup = ({ navigation }) => {

    const goToPacks = () => {
        navigation.navigate('Packs');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>MATCHUP</Text>
            <View style={styles.teamsContainer}>
                <View style={styles.team}>

                    <Text style={styles.teamText}>TEAM 1</Text>
                    <Text style={styles.overallText}>OVR: X</Text>
                </View>
                <View style={styles.team}>

                    <Text style={styles.teamText}>TEAM 2</Text>
                    <Text style={styles.overallText}>OVR: X</Text>
                </View>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>XXX - XXX</Text>
            </View>
            <View style={styles.playerInfoContainer}>
                <Text style={styles.playerInfoText}>PLAYER INFO</Text>
                {/* Additional player info would go here */}
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}><Text>MY TEAM</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={goToPacks} ><Text>PACKS</Text></TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    team: {
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
    },
    teamText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    overallText: {
        fontSize: 16,
    },
    scoreContainer: {
        marginBottom: 20,
    },
    scoreText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    playerInfoContainer: {
        width: '90%',
        height: 200,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerInfoText: {
        fontSize: 24,
        fontWeight: 'bold',
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

export default Matchup;

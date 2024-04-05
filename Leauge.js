import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LeagueScreen = ({ navigation }) => {
    // Temporary standings data
    const standings = [
        { team: 'Team A', wins: 10, losses: 2 },
        { team: 'Team B', wins: 9, losses: 3 },
        { team: 'Team C', wins: 8, losses: 4 },
        // Add more teams as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>LEAGUE</Text>
            <View style={styles.nameInfoContainer}>
                <Text style={styles.nameText}>NAME</Text>
                <Text style={styles.infoText}>INFO</Text>
            </View>
            <Text style={styles.standingsHeader}>STANDINGS</Text>
            <ScrollView style={styles.standingsContainer}>
                {standings.map((item, index) => (
                    <View key={index} style={styles.standingRow}>
                        <Text style={styles.teamName}>{item.team}</Text>
                        <Text style={styles.teamRecord}>{item.wins} - {item.losses}</Text>
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
const buttonHeight = height * 0.1; // 8% of the screen height
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
        marginTop: height * 0.02,
        marginBottom: height * 0.01,
    },
    nameInfoContainer: {
        backgroundColor: '#d3d3d3',
        padding: 10,
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 16,
    },
    standingsHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: height * 0.01,
    },
    standingsContainer: {
        flex: 1,
        marginBottom: height * 0.1, // Footer height
    },
    standingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    teamName: {
        fontSize: 18,
    },
    teamRecord: {
        fontSize: 18,
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
        height: buttonHeight - 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LeagueScreen;

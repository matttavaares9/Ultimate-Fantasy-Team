import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChallengesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Challenges</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>Challenges</Text>
                    <Text style={styles.description}>Complete challenges for rewards</Text>
                    {/* Render challenge cards */}
                </View>
            </View>
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><Text>   MY TEAM</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Packs')}><Text>PACKS</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Matchup')}><Text>MATCHUP</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('League')}><Text>LEAGUE</Text></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 70,
        paddingBottom: 20,
        backgroundColor: 'silver',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    section: {
        padding: 10,
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
    divider: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 10,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 40,
        borderTopWidth: 1,
        borderColor: 'lightgray',
    },
});

export default ChallengesScreen;

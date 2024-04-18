import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ChallengesScreen = ({ navigation }) => {

    const challengeCompleted = false; // example value

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Challenges</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>Point God</Text>
                    <View style={styles.challengeCard}>
                        <Image
                            style={styles.packImage}
                            source={require('./assets/gold.png')} // Replace with the actual image URL
                        />
                        <View style={styles.challengeInfo}>
                            <Text style={styles.challengeText}>Have two point cards get 40+ fantasy points in a day for a Gold Pack</Text>
                            <TouchableOpacity
                                style={[styles.challengeButton, challengeCompleted ? styles.buttonCompleted : null]}
                                disabled={challengeCompleted}
                            >
                                <Text style={styles.buttonText}>{challengeCompleted ? 'Completed' : 'Incomplete'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    challengeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFF0D9', // Consistent color with the trade-in card
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    packImage: {
        width: 80,
        height: 120,
        resizeMode: 'contain',
    },
    challengeInfo: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    challengeText: {
        fontSize: 16,
        fontWeight: '500',
    },
    challengeButton: {
        backgroundColor: '#DAA520', // Gold color for the 'Gold Pack' theme
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonCompleted: {
        backgroundColor: 'green', // Color to indicate completion
    },
});


export default ChallengesScreen;

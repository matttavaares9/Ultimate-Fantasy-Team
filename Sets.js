import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SetsScreen = ({ navigation }) => {

    const lakersPlayersTradedIn = 2; // example value

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Sets</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>Trade-In</Text>
                    <Text style={styles.description}>Exchange cards for rewards</Text>
                </View>
                <Text style={styles.subtitle}>Lakers Trade-In</Text>
                <View style={styles.tradeInSection}>
                    <Image
                        style={styles.rewardImage}
                        source={require('./assets/Brunson.png')} // Replace with the actual image URL
                    />
                    <View style={styles.tradeInInfo}>
                        <Text style={styles.tradeInText}>Trade in 4 players that started on the Lakers for a Reward LeBron Card</Text>
                        <Text style={styles.progressText}>{lakersPlayersTradedIn} of 4 traded in</Text>
                    </View>
                    <TouchableOpacity style={styles.tradeInButton}>
                        <Text style={styles.buttonText}>Trade In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}><Text>   MY TEAM</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Packs')}><Text>PACKS</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Matchup')}><Text>MATCHUP</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('League')}><Text>LEAGUE</Text></TouchableOpacity>
            </View>
        </View >
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
    tradeInSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFF0D9', // A non-bland color for the trade-in card
        borderRadius: 8,
        marginTop: 10,
    },
    rewardImage: {
        width: 80,
        height: 120,
        resizeMode: 'contain',
    },
    tradeInInfo: {
        flex: 1,
        paddingHorizontal: 10,
    },
    tradeInText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
    },
    progressText: {
        fontSize: 14,
        color: 'gray',
    },
    tradeInButton: {
        backgroundColor: '#6E7B47',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default SetsScreen;

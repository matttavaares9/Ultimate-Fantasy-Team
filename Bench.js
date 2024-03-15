import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get the width of the screen

const playersData = [
    { id: '1', name: 'PLAYER NAME', dateOfGame: '[DATE OF GAME]', ovrPoints: 'X' },
    { id: '2', name: 'PLAYER NAME', dateOfGame: '[DATE OF GAME]', ovrPoints: 'X' },
    // Your players data
];

const PlayerCard = ({ name, dateOfGame, ovrPoints }) => (
    <View style={styles.playerCard}>
        <View style={styles.playerDetails}>
            <Text style={styles.playerName}>{name}</Text>
            <Text>{dateOfGame}</Text>
            <Text>OVR POINTS: {ovrPoints}</Text>
        </View>
    </View>
);

const Bench = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.benchHeader}>BENCH</Text>
            <FlatList
                data={playersData}
                renderItem={({ item }) => <PlayerCard {...item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContentContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    backButtonText: {
        fontSize: 18,
    },
    benchHeader: {
        padding: 20,
        fontSize: width * 0.05, // scales size based on screen width
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    listContentContainer: {
        paddingBottom: 60, // space for the footer
    },
    playerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    playerImage: {
        width: width * 0.12, // scales size based on screen width
        height: width * 0.12, // keeps the aspect ratio the same
        backgroundColor: '#f0e68c',
    },
    playerDetails: {
        marginLeft: 10,
        flex: 1, // takes up the rest of the space in the card
    },
    playerName: {
        fontWeight: 'bold',
        fontSize: width * 0.04, // scales size based on screen width
    },
});

export default Bench;

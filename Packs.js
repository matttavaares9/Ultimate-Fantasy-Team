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

const { width, height } = Dimensions.get('window');

const Packs = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.benchHeader}>PACKS</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}><Text>MY TEAM</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}><Text>PACKS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}><Text>MATCHUP</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}><Text>LEAGUE</Text></TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

const buttonWidth = width * 0.18; // 18% of the screen width
const buttonHeight = height * 0.1; // 1% of the screen height
const footerHeight = height * 0.1; // 10% of the screen height

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
    footer: {
        height: footerHeight,
        top: 35,
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

export default Packs;
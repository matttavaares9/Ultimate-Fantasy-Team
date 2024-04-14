// Import necessary React Native and React Navigation components
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

import bronzeImage from './assets/bronze.png';
import silverImage from './assets/silver.png';
import goldImage from './assets/gold.png';

const GetCardsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>GET CARDS</Text>
            <View style={styles.packContainer}>
                <Pack type="Bronze" price="-----" image={bronzeImage} />
                <Pack type="Silver" price="-----" image={silverImage} />
                <Pack type="Gold" price="-----" image={goldImage} />
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

const Pack = ({ type, price, image }) => {
    return (
        <View style={styles.pack}>
            <Image source={image} style={styles.packImage} />
            <Text style={styles.packText}>{type} Pack</Text>
            <Text style={styles.packPrice}>{price}</Text>
            <TouchableOpacity style={styles.getButton}>
                <Text style={styles.getButtonText}>Get</Text>
            </TouchableOpacity>
        </View>
    );
};

const buttonWidth = width * 0.18; // 18% of the screen width
const buttonHeight = height * 0.08; // 8% of the screen height
const footerHeight = height * 0.1; // 10% of the screen height

// StyleSheet for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', // Adjust color based on theme
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    packContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    },
    pack: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 10,
    },
    packImage: {
        width: 100, // Adjust size accordingly
        height: 100, // Adjust size accordingly
        resizeMode: 'contain',
    },
    packText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    getButton: {
        backgroundColor: '#f0ad4e', // Adjust button color based on theme
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },
    getButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '110%',
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

export default GetCardsScreen;

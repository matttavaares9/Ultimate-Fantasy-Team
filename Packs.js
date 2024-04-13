import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const Packs = ({ navigation }) => {
    const [timer, setTimer] = useState('00:00');

    // Placeholder for countdown logic
    useEffect(() => {
        // Logic to handle countdown will go here
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>PACKS</Text>
            <TouchableOpacity style={styles.buttonLarge}>
                <Text style={styles.buttonLargeText}>DAILY FREE PACK</Text>
                <Text style={styles.timer}>{timer}</Text>
            </TouchableOpacity>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonSmall}>
                    <Text style={styles.buttonSmallText}>SETS</Text>
                    <Text style={styles.buttonSubtitle}>Exchange items for rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSmall}>
                    <Text style={styles.buttonSmallText}>CHALLENGES</Text>
                    <Text style={styles.buttonSubtitle}>Complete challenges for rewards</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonFullWidth}>
                <Text style={styles.buttonFullWidthText}>GET CARDS</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}><Text>   MY TEAM</Text></TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonLarge: {
        width: '100%',
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },
    buttonLargeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    timer: {
        fontSize: 18,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonSmall: {
        width: '48%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },
    buttonSmallText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonSubtitle: {
        fontSize: 14,
    },
    buttonFullWidth: {
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    buttonFullWidthText: {
        fontSize: 20,
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

export default Packs;

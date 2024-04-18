// App.js

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Packs from './Packs';
import Matchup from './Matchup';
import League from './League';
import TitleScreen from './TitleScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function SwipeableTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{ style: { height: 0 } }}
      swipeEnabled={true}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Packs" component={Packs} />
      <Tab.Screen name="Matchup" component={Matchup} />
      <Tab.Screen name="League" component={League} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TitleScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TitleScreen" component={TitleScreen} />
        <Stack.Screen name="MainTabs" component={SwipeableTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

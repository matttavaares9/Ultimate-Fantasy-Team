import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import TitleScreen from './TitleScreen';
import Bench from './Bench';
import Packs from './Packs';
import Matchup from './Matchup';
import League from './League';
import getPacks from './getPacks';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TitleScreen"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          ...TransitionPresets.ModalFadeTransition // Apply a slide from right transition
        }}
      >
        <Stack.Screen name="Bench" component={Bench} />
        <Stack.Screen name="TitleScreen" component={TitleScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Packs" component={Packs} />
        <Stack.Screen name="Matchup" component={Matchup} />
        <Stack.Screen name="League" component={League} />
        <Stack.Screen name="getPacks" component={getPacks} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

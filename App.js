import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Komponen
import Tampilan from './src/Text';
import Kotak from './src/kotak';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Tab untuk Tampilan Text */}
        <Tab.Screen name="Tampilan Text" component={Tampilan} />

        {/* Tab untuk Tampilan Kotak */}
        <Tab.Screen name="Tampilan Kotak" component={Kotak} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

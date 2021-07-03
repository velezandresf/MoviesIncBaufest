
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Navigation } from './src/navigation/Navigation';
import { FavoriteProvider } from './src/context/FavoriteContext';
import { BottonNavigation } from './src/navigation/BottomNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <FavoriteState>
        <BottonNavigation />
      </FavoriteState>
    </NavigationContainer>
  )
}

const FavoriteState = ({ children }: any) => {
  return (
    <FavoriteProvider>
      { children }
    </FavoriteProvider>
  )
}

export default App;

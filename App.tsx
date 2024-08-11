import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/screens/Home'
import BottomNavigator from './src/bottom/BottomNavigator'
import Search from './src/screens/Search'
import Favorites from './src/screens/Favorites'
import Wallet from './src/screens/Wallet'
import Profile from './src/screens/Profile'


const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    

  )
}

export default App
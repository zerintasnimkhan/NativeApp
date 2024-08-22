import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Search from '../screens/SearchMain'
import Favorites from '../screens/Favorites'
import Wallet from '../screens/Wallet'
import Profile from '../screens/Profile'

const Bottom = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    // <NavigationContainer>
    <Bottom.Navigator>
        <Bottom.Screen name='Home' 
        component={Home}
        options={{headerShown: true}}
        />
        <Bottom.Screen name='Search' 
        component={Search}
        options={{headerShown: true}}
        />
        <Bottom.Screen name='Favorites' 
        component={Favorites}
        options={{headerShown: true}}
        />
        <Bottom.Screen name='Wallet' 
        component={Wallet}
        options={{headerShown: true}}
        />
        {/* <Bottom.Screen name='Profile' 
        component={Profile}
        options={{headerShown: true}}
        /> */}
    
     {/* </NavigationContainer> */}
     </Bottom.Navigator>
  )
}

export default BottomNavigator
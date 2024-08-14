import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import SearchScreen from './screens/Search';
import DetailsScreen from './screens/Details';
import Favorites from './screens/Favorites';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';
import { Image, Text, View } from 'react-native';

export type StackParamList = {
  Search: undefined;
  Details: { product: { id: string; name: string; price: string; image: string } };
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" 
      component={DetailsScreen}
      options={{ headerShown: false }}
       />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 80,
          paddingBottom: 20,
        }   
      }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0043F9' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0043F9' : '#748c94',
                  fontSize: 10,
                  fontWeight: 800,
                  marginTop: 6
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      
        />
        <Tab.Screen name="Search" component={SearchStackNavigator} 
         options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/magnifying-glass.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0043F9' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0043F9' : '#748c94',
                  fontSize: 10,
                  fontWeight: 800,
                  marginTop: 6
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
       />
        <Tab.Screen name="Favorites" component={Favorites} 
         options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/heart.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#0043F9' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0043F9' : '#748c94',
                  fontSize: 10,
                  fontWeight: 800,
                  marginTop: 6
                }}
              >
               Favorites
              </Text>
            </View>
          ),
        }}
      />
        <Tab.Screen name="Wallet" component={Wallet}
         options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/wallet.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0043F9' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0043F9' : '#748c94',
                  fontSize: 10,
                  fontWeight: 800,
                  marginTop: 6
                }}
              >
                Wallet
              </Text>
            </View>
          ),
        }}
       />
        <Tab.Screen name="Profile" component={Profile}
         options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/person.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 25,
                  tintColor: focused ? '#0043F9' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#0043F9' : '#748c94',
                  fontSize: 10,
                  fontWeight: 800,
                  marginTop: 6
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
       />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
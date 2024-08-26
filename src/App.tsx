import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './screens/Home';
import SearchScreen from './screens/SearchMain';
import DetailsScreen from './screens/Details';
import Favorites from './screens/Favorites';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';
import Cart from './screens/Cart';

import { Image, Text, View } from 'react-native';

export type StackParamList = {
  SearchMain: undefined;
  Details: { product: { id: string; name: string; price: string; image: string } };
  Cart: undefined; 
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const SearchStackNavigator = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      // Reset to the initial screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'SearchMain' }],
      });
    }, [navigation])
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchMain"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" 
      component={DetailsScreen}
      options={{ headerShown: false }}
       />
        <Stack.Screen name="Cart" 
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}> 
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 82,
          paddingBottom: 12,
          shadowColor: '#D3D3D3'
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
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#3C6EEF' : '#818589',
                }}
              />
              <Text
                style={{
                  color: focused ? '#3C6EEF' : '#A9A9A9',
                  fontSize: 12,
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
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#3C6EEF' : '#818589',
                }}
              />
              <Text
                style={{
                  color: focused ? '#3C6EEF' : '#A9A9A9',
                  fontSize: 12,
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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/heart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 28,
                  tintColor: focused ? '#3C6EEF' : '#818589',
                }}
              />
              <Text
                style={{
                  color: focused ? '#3C6EEF' : '#A9A9A9',
                  fontSize: 12,
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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/cart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#3C6EEF' : '#818589',
                }}
              />
              <Text
                style={{
                  color: focused ? '#3C6EEF' : '#A9A9A9',
                  fontSize: 12,
                  fontWeight: 800,
                  marginTop: 6
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
       />
        <Tab.Screen name="Profile" component={Profile}
         options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/person.png')}
                resizeMode="contain"
                style={{
                  width: 34,
                  height: 28,
                  tintColor: focused ? '#3C6EEF' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#3C6EEF' : '#A9A9A9',
                  fontSize: 12,
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
    </Provider>
  );
};

export default App;
import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'; // Import ThemeProvider and useTheme

import Home from './screens/Home';
import SearchScreen from './screens/SearchMain';
import DetailsScreen from './screens/Details';
import Favorites from './screens/Favorites';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryDetailScreen from './screens/CategoryDetails';
import EarnFromBeholdScreen from './screens/EarnFromBeholdScreen';
import ArtCategoriesScreen from './screens/SelectArtCategories';
import AboutYouScreen from './screens/AboutYouScreen';
import AddStoryScreen from './screens/AddStoryScreen';
import PlayExhibitionScreen from './screens/PlayExhibitionScreen';
import FavoritesScreen from './screens/Favorites';

// Define your stack navigator parameter list types
export type StackParamList = {
  Home: undefined;
  CategoriesScreen: undefined;
  SearchMain: undefined;
  Details: { product: { id: string; name: string; price: string; image: string } };
  Cart: undefined;
  CategoryDetail: undefined;
  Profile: undefined;
  EarnFromBehold: undefined;
  SelectArtCategories: undefined;
  AboutYouScreen: undefined;
  AddStoryScreen: undefined;
  Favorites: undefined;
  PlayExhibitionScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="CategoriesScreen" 
      component={CategoriesScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
  </Stack.Navigator>
);

const SearchStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="SearchMain" 
      component={SearchScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Details" 
      component={DetailsScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Cart" 
      component={Cart} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="EarnFromBehold" 
      component={EarnFromBeholdScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="SelectArtCategories" 
      component={ArtCategoriesScreen}  
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="AboutYouScreen" 
      component={AboutYouScreen}  
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="AddStoryScreen" 
      component={AddStoryScreen} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

const FavoritesStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Favorites" 
      component={FavoritesScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="PlayExhibitionScreen" 
      component={PlayExhibitionScreen} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

const MainTabs = () => {
  // Use theme context to apply dark mode or light mode styles
  const { isDarkMode, theme } = useTheme(); 

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',  // Use dynamic background color based on theme
          height: 82,
          paddingBottom: 12,
          shadowColor: '#D3D3D3',
        },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStackNavigator} 
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
                  tintColor: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#748c94'), // Dynamic icon color
                }}
              />
              <Text
                style={{
                   color: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#A9A9A9'),// Dynamic text color
                  fontSize: 12,
                  fontWeight: '800',
                  marginTop: 6,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="SearchTab" 
        component={SearchStackNavigator}
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
                  tintColor: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#748c94'), // Dynamic icon color
                }}
              />
              <Text
                style={{
                  color: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#A9A9A9'), // Dynamic text color
                  fontSize: 12,
                  fontWeight: '800',
                  marginTop: 6,
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesStackNavigator}
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
                  tintColor: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#748c94'), // Dynamic icon color
                }}
              />
              <Text
                style={{
                  color: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#A9A9A9'), // Dynamic text color
                  fontSize: 12,
                  fontWeight: '800',
                  marginTop: 6,
                }}
              >
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={Wallet}
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
                  tintColor: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#748c94'), // Dynamic icon color
                }}
              />
              <Text
                style={{
                  color: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#A9A9A9'), // Dynamic text color
                  fontSize: 12,
                  fontWeight: '800',
                  marginTop: 6,
                }}
              >
                Wallet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
              <Image
                source={require('../src/database/icons/user.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#748c94'), // Dynamic icon color
                }}
              />
              <Text
                style={{
                  color: focused ? (isDarkMode ? '#FFFFFF' : '#3C6EEF') : (isDarkMode ? '#AAAAAA' : '#A9A9A9'), // Dynamic text color
                  fontSize: 12,
                  fontWeight: '800',
                  marginTop: 6,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the type for your navigation stack
type RootStackParamList = {
  SignUpScreen: undefined; // Updated to include SignUpScreen
  Login: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Top Artwork Image */}
      <Image
        source={require('../database/images/welcomeImg.png')} // Replace with your artwork image URL
        style={styles.artwork}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Behold</Text>
      <Text style={styles.subtitle}>
        Start indulging in the world of beautiful artworks.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artwork: {
    width: 1000, // Adjust dimensions as needed
    height: 560,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 520,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  subtitle: {
    fontSize: 16.5,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 80,
    marginLeft: 30,
    marginRight: 100,
    lineHeight: 25
  },
  getStartedButton: {
    backgroundColor: '#82FC9A', // Green color similar to the one in the image
    paddingVertical: 12,
    paddingHorizontal: 148,
    borderRadius: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#fff', // Dark button for Login
    paddingVertical: 12,
    paddingHorizontal: 170,
    borderRadius: 10,
    marginBottom: -20,
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14.5,
  },
});

export default WelcomeScreen;

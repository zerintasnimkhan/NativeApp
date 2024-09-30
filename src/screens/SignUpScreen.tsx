import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define a type for your navigation stack
type RootStackParamList = {
  SignUpScreen: undefined;
  WelcomeScreen: undefined;
  CheckEmailScreen: undefined;
  LoginScreen: undefined;
};

// Define the props for the SignUpScreen component
type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignUpScreen'>;
  route: RouteProp<RootStackParamList, 'SignUpScreen'>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  // Function to handle navigation to CheckEmailScreen when Next button is pressed
  const handleNextPress = () => {
    navigation.navigate('CheckEmailScreen');
  };

  // Function to navigate back to WelcomeScreen when back arrow is pressed
  const handleBackPress = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image source={require('../database/images/backarrow.png')} style={styles.backIcon}/>
      </TouchableOpacity>

      {/* Step indicator */}
      <View style={styles.stepIndicator}>
        <View style={styles.activeStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
      </View>

      {/* Email input section */}
      <Text style={styles.title}>What is your email?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {email.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={() => setEmail('')}>
            <Text style={styles.clearText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Social Sign Up section */}
      <Text style={styles.orText}>Or sign up with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../database/icons/google-glass-logo.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../database/icons/facebook-logo.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../database/icons/apple-logo.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Login option */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 70,
  },
  activeStep: {
    width: 90,
    borderRadius: 10,
    height: 4,
    backgroundColor: '#3C6EEF',
    marginHorizontal: 5,
  },
  inactiveStep: {
    width: 90,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 64,
    color: '#fff',
  },
  clearButton: {
    padding: 5,
  },
  clearText: {
    color: '#fff',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  backIcon: {
    height: 60,
    width: 60,
    marginLeft: -16,
    marginTop: -20,
    marginBottom: 20
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  nextButton: {
    backgroundColor: '#82FC9A',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 320,
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#121212',
    fontSize: 14.5,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    color: '#82FC9A',
    fontWeight: '500',
    fontSize: 14.5
  },
});

export default SignUpScreen;

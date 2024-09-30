import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  CheckEmailScreen: undefined;
  SetPasswordScreen: undefined;
};

type SetPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SetPasswordScreen'
>;

interface Props {
  navigation: SetPasswordScreenNavigationProp;
}

const SetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../database/images/backarrow.png')} />
      </TouchableOpacity>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <View style={styles.activeStep} />
        <View style={styles.activeStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Let’s set your password</Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {/* <Image source={require('../database/icons/eye-icon.png')} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          {/* <Image source={require('../database/icons/eye-icon.png')} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          // Handle Next action
          console.log('Password Set!');
        }}
      >
        <Text style={styles.nextButtonText}>Next</Text>
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
    marginTop: 50,
  },
  activeStep: {
    width: 50,
    height: 4,
    backgroundColor: '#3C6EEF',
    marginHorizontal: 5,
  },
  inactiveStep: {
    width: 50,
    height: 4,
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
    height: 40,
    color: '#fff',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#888',
  },
  nextButton: {
    backgroundColor: '#00FF88',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SetPasswordScreen;

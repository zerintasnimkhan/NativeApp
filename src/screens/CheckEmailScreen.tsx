import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  CheckEmailScreen: undefined;
  SetPasswordScreen: undefined;
};

type CheckEmailScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CheckEmailScreen'>;
};

const CheckEmailScreen: React.FC<CheckEmailScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../database/images/backarrow.png')} style={styles.backIcon}/>
       </TouchableOpacity>

      {/* Step indicator */}
      <View style={styles.stepIndicator}>
        <View style={styles.activeStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
      </View>
      {/* Back Button
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity> */}

      {/* Email verification content */}
      <View style={styles.emailIconContainer}>
      <Image source={require('../database/icons/new-mail.png')} style={styles.emailIcon}/>
      </View>
      <Text style={styles.title}>Check your email</Text>
      <Text style={styles.description}>
        We've sent an email to 
      </Text>
      <Text style={styles.description}>andrew.collins@samplemail.com with a link that you can tap to verify your email.</Text>

      {/* Resend link */}
      <TouchableOpacity style={styles.resendButton}  onPress={() => navigation.navigate('SetPasswordScreen')}>
        <Text style={styles.resendText}>Resend Link</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 68
    
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
  emailIconContainer: {
    backgroundColor: '#1C1C1C',
    borderRadius: 100,
    padding: 54,
    marginBottom: 30,
  },
  emailIcon: {
    width: 50,
    height: 50,
    tintColor: '#ffd'

  },
  backIcon: {
    height: 60,
    width: 60,
    marginLeft: -16,
    marginTop: -30,
    marginBottom: 40
  },
  icon: {
    fontSize: 48,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#aaa',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 15
    // marginBottom: 360,
  },
  resendButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 146,
    borderRadius: 5,
    marginTop: 340

  },
  resendText: {
    color: '#121212',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CheckEmailScreen;

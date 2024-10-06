import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    ProfileSetupScreen: undefined;
    SelectArtworkScreen: undefined;
    ArtistFollowScreen: undefined;
    LoginCompleteScreen: undefined;
};

type LoginCompleteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginCompleteScreen'
>;

interface Props {
  navigation: LoginCompleteScreenNavigationProp;
}

const LoginCompleteScreen : React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../database/images/backarrow.png')} style={styles.backIcon}/>
       </TouchableOpacity>
      <View style={styles.content}>
        {/* Circle with a check icon */}
        <View style={styles.iconWrapper}>
          <Image
            source={require('../database/icons/double-check.png')} 
            style={styles.checkIcon}
          />
        </View>
        
        {/* Title and description */}
        <Text style={styles.title}>Welcome to Behold</Text>
        <Text style={styles.description}>
          Now whenever you sign in, we will ask you for a code after you enter your email & password.
        </Text>
      </View>
      
      {/* Done button */}
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backIcon: {
    height: 60,
    width: 60,
    marginLeft: -16,
    marginTop: -30,
    marginBottom: 10
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 170,
    height: 170,
    borderRadius: 90,
    backgroundColor: '#111', // Dark circle background
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -180,
    marginBottom: 20,
  },
  checkIcon: {
    width: 50,
    height: 50, // Replace with the check icon size
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 26
  },
  doneButton: {
    backgroundColor: '#82FC9A',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  doneButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginCompleteScreen;

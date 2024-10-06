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
      <View style={styles.content}>
        {/* Circle with a check icon */}
        <View style={styles.iconWrapper}>
          <Image
            source={{ uri: 'https://example.com/check-icon.png' }} // Placeholder for the check icon
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
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#111', // Dark circle background
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkIcon: {
    width: 50,
    height: 50, // Replace with the check icon size
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  doneButton: {
    backgroundColor: '#1DBF73',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  doneButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginCompleteScreen;

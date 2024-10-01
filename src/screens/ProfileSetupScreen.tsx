import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
    SetPasswordScreen: undefined;
    ProfileSetupScreen: undefined;
  };
  
  type ProfileSetupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProfileSetupScreen'
>;

interface Props {
  navigation: ProfileSetupScreenNavigationProp;
}

const ProfileSetupScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('Andrew Collins');
  const [photo, setPhoto] = useState(null);

  const handleAddPhoto = () => {
    // Logic to add photo
    console.log('Add photo pressed');
  };

  const handleNext = () => {
    // Logic to move to the next screen
    console.log('Next button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.backButton}>
        {/* Implement back button functionality */}
      </TouchableOpacity>
      <View style={styles.progressBar}>
        <View style={styles.activeStep} />
        <View style={styles.activeStep} />
        <View style={styles.activeStep} />
        <View style={styles.inactiveStep} />
      </View>
      <Text style={styles.title}>Let’s setup your profile</Text>
      <TouchableOpacity style={styles.photoContainer} onPress={handleAddPhoto}>
        <View style={styles.addPhoto}>
          {/* <Image source={photo} style={styles.photo} /> */}
        </View>
        <Text style={styles.addPhotoText}>Add Photo</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  activeStep: {
    width: 40,
    height: 4,
    backgroundColor: '#556',
    marginHorizontal: 4,
    borderRadius: 2,
  },
  inactiveStep: {
    width: 40,
    height: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
    borderRadius: 2,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  addPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addPhotoText: {
    color: '#fff',
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  input: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 8,
  },
  nextButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProfileSetupScreen;

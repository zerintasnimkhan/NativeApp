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
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    SetPasswordScreen: undefined;
    ProfileSetupScreen: undefined;
    ArtworkSelectionScreen: undefined;
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
  const [photo, setPhoto] = useState<string | null>(null);  // State accepts string or null

  const handleAddPhoto = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',   // Specify 'photo' for mediaType
      quality: 1,           // Image quality between 0 and 1
      includeBase64: false  // Whether to include base64 data
    };

    // Open the image picker
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        // Ensure that source is a string or null, handling undefined
        const source = response.assets ? response.assets[0].uri : null;
        setPhoto(source ?? null);  // Use nullish coalescing operator to handle undefined
      }
    });
  };

  const handleNext = () => {
    // Logic to move to the next screen
    console.log('Next button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../database/images/backarrow.png')} style={styles.backIcon}/>
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
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photoPreview} />
          ) : (
            <Image source={require('../database/icons/add-photo.png')} style={styles.photoIcon} />
          )}
        </View>
        <Text style={styles.addPhotoText}>Add Photo</Text>
      </TouchableOpacity>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        {name.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={() => setName('')}>
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <TouchableOpacity style={styles.nextButton}  onPress={() => navigation.navigate('ArtworkSelectionScreen')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  backIcon: {
    height: 60,
    width: 60,
    marginLeft: -36,
    marginTop: -20,
    marginBottom: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 40,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 90,
    marginBottom: 40,
  },
  activeStep: {
    width: 90,
    height: 4,
    backgroundColor: '#8397FC',
    marginHorizontal: 4,
    borderRadius: 2,
  },
  inactiveStep: {
    width: 90,
    height: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
    borderRadius: 2,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  addPhoto: {
    width: 155,
    height: 155,
    borderRadius: 90,
    backgroundColor: '#232323',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
    marginTop: -35
  },
  photoPreview: {
    width: 155,
    height: 155,
    borderRadius: 90,
    resizeMode: 'cover',
  },
  addPhotoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: -74,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', 
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderColor: '#333',
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 0,
  },
  clearButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  clearText: {
    color: '#888',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#82FC9A',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 320
  },
  nextButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ProfileSetupScreen;

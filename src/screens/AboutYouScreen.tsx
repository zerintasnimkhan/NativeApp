import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome, Feather } from '@expo/vector-icons'; // For icons
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList ={
    AboutYouScreen: undefined;
    AddStoryScreen: undefined;
};

type AboutYouScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AboutYouScreen'>;
interface Props {
    navigation: AboutYouScreenNavigationProp;
  }
const AboutYouScreen: React.FC<Props> =  ({ navigation }) => {
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('10624 Pecan Lane, Jonesboro GA, United States 30238');
  const [website, setWebsite] = useState('www.andrewcollins.co');
  const [facebook, setFacebook] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Feather name="arrow-left" size={24} color="white" /> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Feather name="x" size={24} color="white" /> */}
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressSegment, styles.completed]} />
        <View style={[styles.progressSegment, styles.completed]} />
        <View style={styles.progressSegment} />
      </View>

      {/* Form Section */}
      <Text style={styles.title}>Tell us about you</Text>

      {/* Bio */}
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Write here.."
        placeholderTextColor="#888"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      {/* Location */}
      <Text style={styles.label}>Location</Text>
      <View style={styles.inputContainer}>
        {/* <FontAwesome name="map-marker" size={20} color="gray" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          value={location}
          editable={false} // Assuming location is not editable
        />
      </View>

      {/* Links */}
      <Text style={styles.label}>Links</Text>

      {/* Website */}
      <View style={styles.inputContainer}>
        {/* <FontAwesome name="globe" size={20} color="gray" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Website"
          placeholderTextColor="#888"
          value={website}
          onChangeText={setWebsite}
        />
      </View>

      {/* Facebook */}
      <View style={styles.inputContainer}>
        {/* <FontAwesome name="facebook" size={20} color="gray" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Facebook"
          placeholderTextColor="#888"
          value={facebook}
          onChangeText={setFacebook}
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} 
       onPress={() => navigation.navigate('AddStoryScreen')}  >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 34,
    marginTop: 22
  },
  progressSegment: {
    height: 4,
    width: 120,
    backgroundColor: '#555',
    marginHorizontal: 2,
    borderRadius: 2,
  },
  completed: {
    backgroundColor: '#6495ED',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    height: 160,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 14,
  },
  button: {
    backgroundColor: '#7BEE92',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutYouScreen;

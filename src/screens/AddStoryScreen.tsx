import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList ={
    AddStoryScreen: undefined;
};

type AddStoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddStoryScreen'>;
interface Props {
    navigation: AddStoryScreenNavigationProp;
  }
const AddStoryScreen: React.FC<Props> =  ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top navigation section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Ionicons name="arrow-back" size={24} color="white" /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle cancel action */ }}>
          {/* <Ionicons name="close" size={24} color="white" /> */}
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressSegment, styles.completed]}></View>
        <View style={[styles.progressSegment, styles.completed]}></View>
        <View style={[styles.progressSegment, styles.completed]}></View>
      </View>

      {/* Main content */}
      <Text style={styles.title}>Tell us your story</Text>
      <Text style={styles.subtitle}>Share some chronicles of your life journey.</Text>

      {/* Add Story Section */}
      <TouchableOpacity style={styles.addStoryButton}>
        {/* <Ionicons name="add-circle-outline" size={24} color="green" /> */}
        <Text style={styles.addStoryText}>Add Story</Text>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    color: '#999',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 50,
  },
  addStoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  addStoryText: {
    color: 'green',
    fontSize: 16,
    marginLeft: 10,
  },
  disabledNextButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#666',
    fontSize: 16,
  },
});

export default AddStoryScreen;

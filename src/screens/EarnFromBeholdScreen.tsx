import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import this for typing

// Define your navigation stack params
type RootStackParamList = {
  Profile: undefined;
  EarnFromBehold: undefined; 
  SelectArtCategories: undefined;
  AboutYouScreen: undefined;
};

// Define the navigation prop type for this screen
type EarnFromBeholdScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EarnFromBehold'>;

interface Props {
  navigation: EarnFromBeholdScreenNavigationProp;
}

const EarnFromBeholdScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}> Earn from Behold</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
      <Image source={require('../database/images/colorpalatte.png')} style={styles.icon} />
      </View>
      <Text style={styles.title}>Start your artist journey</Text>
      <Text style={styles.description}>
        Set up your artist profile and start earning from Behold by sharing your artwork with the world.
      </Text>
      <Text style={styles.perksTitle}>Perks of an Artist</Text>
      <View style={styles.perksList}>
  <View style={styles.perkItem}>
    <View style={styles.tickCircle}>
      <Text style={styles.tickMark}>✓</Text>
    </View>
    <Text style={styles.perkText}>Upload your own artworks</Text>
  </View>

  <View style={styles.perkItem}>
    <View style={styles.tickCircle}>
      <Text style={styles.tickMark}>✓</Text>
    </View>
    <Text style={styles.perkText}>Get discovered as an artist in community</Text>
  </View>

  <View style={styles.perkItem}>
    <View style={styles.tickCircle}>
      <Text style={styles.tickMark}>✓</Text>
    </View>
    <Text style={styles.perkText}>Earn from marketplace</Text>
  </View>

  <View style={styles.perkItem}>
    <View style={styles.tickCircle}>
      <Text style={styles.tickMark}>✓</Text>
    </View>
    <Text style={styles.perkText}>Protect and manage your artwork copyrights</Text>
  </View>
</View>

      <TouchableOpacity style={styles.button} 
       onPress={() => navigation.navigate('SelectArtCategories')} >
        <Text style={styles.buttonText}>Let's Go</Text>
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
  backText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
    color: '#000',
    backgroundColor: '#000000',
    marginTop: 30,
    marginBottom: 50
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#000'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 10
  },
  description: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 26,
  
  },
  perksList: {
    marginTop: 20,
  },
  perkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  tickCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7BEE92', // Green border for the circle
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Black background inside the circle
    marginRight: 10, // Space between the circle and text
  },
  tickMark: {
    color: '#7BEE92', // Green tick mark
    fontSize: 10,
    fontWeight: 'medium',
  },
  perkText: {
    color: '#fff', // White text color
    fontSize: 14,
  },
  perksTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7BEE92',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 90,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EarnFromBeholdScreen;

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
        <Image source={{ uri: 'https://e7.pngegg.com/pngimages/255/465/png-clipart-palette-computer-icons-watercolor-painting-painter-painting-watercolor-painting-text.png'}} style={styles.icon} />
      </View>
      <Text style={styles.title}>Start your artist journey</Text>
      <Text style={styles.description}>
        Set up your artist profile and start earning from Behold by sharing your artwork with the world.
      </Text>
      <Text style={styles.perksTitle}>Perks of an Artist</Text>
      <View style={styles.perksList}>
        <Text style={styles.perkItem}>✓ Upload your own artworks</Text>
        <Text style={styles.perkItem}>✓ Get discovered as an artist in community</Text>
        <Text style={styles.perkItem}>✓ Earn from marketplace</Text>
        <Text style={styles.perkItem}>✓ Protect and manage your artwork copyrights</Text>
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
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: '#000'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 10
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 36,
  
  },
  perksTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  perksList: {
    marginBottom: 20,
  },
  perkItem: {
    color: '#7BEE92',
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7BEE92',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 80,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EarnFromBeholdScreen;

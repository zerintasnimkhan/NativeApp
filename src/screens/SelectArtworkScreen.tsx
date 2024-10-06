import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';


const artworkData = [
  { id: '1', image: require('../database/images/image@2x-0.png') }, 
  { id: '2', image: require('../database/images/image@2x-1.png') }, 
  { id: '3', image: require('../database/images/image@2x-10.png') }, 
  { id: '4', image: require('../database/images/image@2x-11.png') }, 
  { id: '5', image: require('../database/images/image@2x-12.png') }, 
  { id: '6', image: require('../database/images/image@2x-2.png') }, 
  { id: '7', image: require('../database/images/image@2x-3.png') }, 
  { id: '8', image: require('../database/images/image@2x-4.png') }, 
  { id: '9', image: require('../database/images/image@2x-5.png') }, 
  { id: '10', image: require('../database/images/image@2x-6.png') },
  { id: '11', image: require('../database/images/image@2x-7.png') }, 
  { id: '12', image: require('../database/images/image@2x-8.png') }, 
  { id: '13', image: require('../database/images/image@2x-9.png') },
  { id: '14', image: require('../database/images/image@2x-10.png') },
  { id: '15', image: require('../database/images/image@2x-12.png') },
  { id: '16', image: require('../database/images/image@2x-2.png') },
  { id: '17', image: require('../database/images/image@2x-3.png') },
  { id: '18', image: require('../database/images/image@2x-4.png') },
];

type RootStackParamList = {
    SetPasswordScreen: undefined;
    ProfileSetupScreen: undefined;
    SelectArtworkScreen: undefined;
    ArtistFollowScreen: undefined;
};

type SelectArtworkScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SelectArtworkScreen'
>;

interface Props {
  navigation: SelectArtworkScreenNavigationProp;
}

const ArtworkSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedArtworks, setSelectedArtworks] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelectedArtworks((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const renderArtwork = ({ item }: { item: { id: string; image: any } }) => (
    <TouchableOpacity
      style={[
        styles.artworkContainer,
        selectedArtworks.includes(item.id) && styles.selectedArtwork,
      ]}
      onPress={() => handleSelect(item.id)}
    >
      <Image source={item.image} style={styles.artworkImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../database/images/backarrow.png')} style={styles.backIcon}/>
       </TouchableOpacity>
      
      <View style={styles.progressBar}>
        <View style={styles.activeStep} />
        <View style={styles.activeStep} />
        <View style={styles.activeStep} />
        <View style={styles.activeStep} />
      </View>

      <Text style={styles.title}>
        Select some of the artwork you like the most ({selectedArtworks.length}/5)
      </Text>

      <FlatList
        data={artworkData}
        renderItem={renderArtwork}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
       <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ArtistFollowScreen')}>
        <Text style={styles.nextButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 20,
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
    marginBottom: 40
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  activeStep: {
    width: 90,
    height: 4,
    backgroundColor: '#8397FC',
    marginHorizontal: 4,
    borderRadius: 2,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  grid: {
    justifyContent: 'center',
  },
  artworkContainer: {
    width: '30%',
    margin: '1.5%',
    aspectRatio: 1, // Makes the artwork squares
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedArtwork: {
    borderColor: '#8397FC',
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nextButton: {
    backgroundColor: '#82FC9A',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    // marginTop: 400,
  },
  nextButtonText: {
    color: '#121212',
    fontSize: 14.5,
    fontWeight: 'bold',
  },
});

export default ArtworkSelectionScreen;

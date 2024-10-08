import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Sample data for artists
const artists = [
  { id: '1', name: 'Vincent Baker', followed: false, image: 'https://img.freepik.com/free-photo/expressive-redhead-bearded-man-with-hat_176420-32241.jpg' },
  { id: '2', name: 'Nicole Gardner', followed: true, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '3', name: 'Arthur Gonzalez', followed: false, image: 'https://img.freepik.com/free-photo/serious-man-teacher-with-confident-clever-look-has-beard-mustache-listens-pupil-s-answer-wears-pink-sweater-round-glasses_273609-16686.jpg' },
  { id: '4', name: 'Maria Ward', followed: false, image: 'https://img.freepik.com/free-photo/portrait-fair-haired-woman-with-warm-blue-eyes-dry-lips-healthy-skin-looking-directly-alluring-girl-with-beautiful-appearance-dressed-casually-posing_273609-7635.jpg' },
  { id: '5', name: 'George Garrett', followed: true, image: 'https://media.istockphoto.com/id/1025855432/photo/daylight-portrait-of-young-handsome-caucasian-man-isolated-on-grey-background-dressed-in.jpg?s=612x612&w=0&k=20&c=zvQW-kWUHtgY360LhcTi42yXqbtAzXEPU-jlSV3xAL8=' },
  { id: '6', name: 'Tyler Sanders', followed: false, image: 'https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg' },
  { id: '7', name: 'Betty Pierce', followed: true, image: 'https://st4.depositphotos.com/13193658/25036/i/450/depositphotos_250363326-stock-photo-smiling-attractive-woman-white-sweater.jpg' },
  { id: '8', name: 'Linda West', followed: false, image: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' },
  { id: '9', name: 'Edward Rice', followed: true, image: 'https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid' },
  { id: '10', name: 'Samuel Morris', followed: false, image: 'https://media.istockphoto.com/id/1025855432/photo/daylight-portrait-of-young-handsome-caucasian-man-isolated-on-grey-background-dressed-in.jpg?s=612x612&w=0&k=20&c=zvQW-kWUHtgY360LhcTi42yXqbtAzXEPU-jlSV3xAL8=' },
];

type RootStackParamList = {
    ProfileSetupScreen: undefined;
    SelectArtworkScreen: undefined;
    ArtistFollowScreen: undefined;
    LoginCompleteScreen: undefined;
};

type ArtistFollowScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ArtistFollowScreen'
>;

interface Props {
  navigation: ArtistFollowScreenNavigationProp;
}
const ArtistFollowScreen : React.FC<Props> = ({ navigation }) => {
  const [artistList, setArtistList] = useState(artists);

  // Toggle follow/unfollow status
  const handleFollowToggle = (id: string) => {
    const updatedList = artistList.map((artist) =>
      artist.id === id ? { ...artist, followed: !artist.followed } : artist
    );
    setArtistList(updatedList);
  };

  // Separator component
  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  // Render each artist item
  const renderArtistItem = ({ item }: { item: any }) => (
    <View style={styles.artistRow}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <Text style={styles.artistName}>{item.name}</Text>
      <TouchableOpacity
        style={[
          styles.followButton,
          { backgroundColor: item.followed ? '#fff' : '#000' },
        ]}
        onPress={() => handleFollowToggle(item.id)}
      >
        <Text style={item.followed ? styles.unfollowText : styles.followText}>
          {item.followed ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../database/images/backarrow.png')} style={styles.backIcon}/>
       </TouchableOpacity>
      <Text style={styles.title}>
        You are almost done! Here are some of the artists you might be interested to follow
      </Text>
      <FlatList
        data={artistList}
        keyExtractor={(item) => item.id}
        renderItem={renderArtistItem}
        ItemSeparatorComponent={renderSeparator}  // Adding separator between items
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('LoginCompleteScreen')}>
        <Text style={styles.startButtonText}>Let’s Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    marginBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    marginTop: 80,
    marginBottom: 40,
  },
  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginRight: 15,
  },
  artistName: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  followButton: {
    width: 100, // Set a fixed width for both buttons
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#525252',
    alignItems: 'center', // Center the text inside the button
  },
  followText: {
    color: '#82FC9A',
    fontWeight: 'bold',
  },
  unfollowText: {
    color: '#000',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#333', // or any color to match your design
    marginVertical: 5,
  },
  startButton: {
    backgroundColor: '#82FC9A',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
   marginBottom: -8
  },
  startButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ArtistFollowScreen;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { useFonts, Poppins_400Regular } from 'react-native-google-fonts';
import GlobalFont from 'react-native-global-font';

const ProfileScreen = () => {


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Set the default global font (Optional)
  GlobalFont.applyGlobal('Poppins_400Regular');
  const user = {
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s',
    username: 'Ayaka Kimble',
    email: 'ayakakimble@gamil.com',
    phone: '+123456789',
    location: 'Calgary, Alberta, Canada',
    accountType: 'Buyer',
    verificationStatus: 'Verified',
    membershipLevel: 'Gold Member',
  };

  return (
      
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.ProfileText}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={styles.username}>{user.username}</Text>
      </View>

     
      <View style={styles.accountContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{user.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Account Type:</Text>
          <Text style={styles.value}>{user.accountType}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Verification Status:</Text>
          <Text style={styles.value}>{user.verificationStatus}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Membership Level:</Text>
          <Text style={styles.value}>{user.membershipLevel}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, styles.logoutButtonText]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  ProfileText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#565656',
  },

  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular'
  },
  accountContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',

  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3C6EEF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
  },
  logoutButtonText: {
    color: '#fff',
  },
});

export default ProfileScreen;

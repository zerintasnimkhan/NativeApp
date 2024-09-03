import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme hook

const ProfileScreen = () => {
  const { theme, toggleTheme } = useTheme(); // Use theme context
  const isLightMode = theme.mode === 'light';

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
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.ProfileText, { color: theme.text }]}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={[styles.username, { color: theme.text }]}>{user.username}</Text>
      </View>

      <View style={styles.accountContainer}>
        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: theme.text }]}>Email:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{user.email}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: theme.text }]}>Phone:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{user.phone}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: theme.text }]}>Location:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{user.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: theme.text }]}>Account Type:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{user.accountType}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: theme.text }]}>Verification Status:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{user.verificationStatus}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: theme.text }]}>Membership Level:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{user.membershipLevel}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  ProfileText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    fontFamily: 'Poppins-Regular',
  },
  accountContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 120,
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
});

export default ProfileScreen;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme hook

const ProfileScreen = () => {
  const { theme } = useTheme(); // Use theme context
  const user = {
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s',
    username: 'Ayaka Kimblle',
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      {/* Custom Top Section */}
      <View style={styles.gridContainer}>
        <Image
          source={require('../database/icons/menu.png')}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: '#FFFFFF'
          }}
        />
         <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Behold</Text>
          <Text style={styles.subLogoText}>World Art Exchange</Text>
        </View>
        <View>
        <Image source={require('../database/icons/alarm-bell.png')} resizeMode="contain" style={{  width: 30,
            height: 30,
            tintColor: '#FFFFFF' }} />
        </View>
      </View>


      {/* Profile Section */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIconContainer}>
          {/* <Icon name="edit" size={18} color="#fff" /> */}
        </TouchableOpacity>
        <Text style={[styles.username, { color: '#FFFFFF' }]}>{user.username}</Text>
      </View>

      {/* Tabs (Settings and Following) */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={[styles.tabText, styles.activeTabText]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Following (10)</Text>
        </TouchableOpacity>
      </View>
      {/* Account Section */}
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionHeader, { color: theme.text }]}>Account</Text>

        {/* Card-like TouchableOpacity */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.sectionRow}>
            {/* <Icon name="person" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/user.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: '#FFFFFF'
          }}
        />
            <Text style={[styles.sectionText, { color: theme.text }]}>Edit Profile Information</Text>
            <Image
          source={require('../database/icons/next.png')}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: '#FFFFFF',
          }}
        />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.sectionRow}>
            {/* <Icon name="lock" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/padlock.png')}
          resizeMode="contain"
          style={{
            width: 24,
            height: 22,
            tintColor: '#FFFFFF'
          }}
        />
            <Text style={[styles.sectionText, { color: theme.text }]}>Change Password</Text>
            {/* <Icon name="chevron-right" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/next.png')}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: '#FFFFFF',
          }}
        />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.sectionRow}>
            {/* <Icon name="security" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/authentic.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: '#FFFFFF'
          }}
        />
            <Text style={[styles.sectionText, { color: theme.text }]}>2FA Authentication</Text>
            <Text style={styles.notActiveText}>Not Active</Text>
            {/* <Icon name="chevron-right" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/next.png')}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: '#FFFFFF'
          }}
        />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.sectionRow}>
            {/* <Icon name="account-balance-wallet" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/house.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 22,
            tintColor: '#FFFFFF'
          }}
        />
            <Text style={[styles.sectionText, { color: theme.text }]}>Earn from Behold</Text>
            {/* <Icon name="chevron-right" size={24} color="#757575" /> */}
            <Image
          source={require('../database/icons/next.png')}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: '#FFFFFF'
          }}
        />
          </TouchableOpacity>
        </View>
      </View>

      {/* Notifications Section */}
      <View style={styles.sectionContainer}>
      <Text style={[styles.header, { color: theme.text }]}>Notifications</Text>

{/* Show all notifications setting */}
<View style={styles.settingRow}>
  <View style={styles.textContainer}>
    <Text style={[styles.title, { color: theme.text }]}>Show all notifications</Text>
    <Text style={styles.description}>
      All types of notifications will be shown.
    </Text>
  </View>
  <Image
          source={require('../database/icons/switch.png')}
          resizeMode="contain"
          style={{
            width: 70,
            height: 55,
            tintColor: '#7BEE92'
          }}
        />
</View>

{/* Notify New Post setting */}
<View style={styles.settingRow}>
  <View style={styles.textContainer}>
    <Text style={[styles.title, { color: theme.text }]}>Notify New Post</Text>
    <Text style={styles.description}>
      Notification will be given when followed artists post new artwork.
    </Text>
  </View>
  <Image
          source={require('../database/icons/switchOff.png')}
          resizeMode="contain"
          style={{
            width: 70,
            height: 55,
            tintColor: '#FFFFFF'
          }}
        />
</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#111', // Dark background for the header
  },
  menuIconContainer: {
    padding: 5,
  },
  notificationIconContainer: {
    padding: 5,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subLogoText: {
    fontSize: 10,
    color: '#ccc',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 68,
    marginTop: 12,
    marginBottom: 10,
    
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 110, // Position the edit icon over the profile image
    backgroundColor: '#2f89fc',
    borderRadius: 12,
    padding: 4,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabItem: {
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#757575',
  },
  activeTabText: {
    color: '#757575',
    borderBottomWidth: 2,
    borderBottomColor: '#7BEE92',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#222',
    padding: 6,
    borderRadius: 6,
    marginBottom: 10,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  sectionText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  notActiveText: {
    fontSize: 14,
    color: '#757575',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#A9A9A9',
    marginTop: 5,
  },
});

export default ProfileScreen;

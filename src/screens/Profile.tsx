import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme hook

const ProfileScreen = () => {
  const { theme } = useTheme(); // Use theme context
  const [activeTab, setActiveTab] = useState('Settings'); // State for active tab

  // Dummy user data for following
  const [followingData, setFollowingData] = useState([
    { id: '1', name: 'Vincent Baker', image: 'https://img.freepik.com/free-photo/expressive-redhead-bearded-man-with-hat_176420-32241.jpg', isFollowing: true },
    { id: '2', name: 'Nicole Gardner', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D', isFollowing: true },
    { id: '3', name: 'Arthur Gonzalez', image: 'https://img.freepik.com/free-photo/serious-man-teacher-with-confident-clever-look-has-beard-mustache-listens-pupil-s-answer-wears-pink-sweater-round-glasses_273609-16686.jpg',isFollowing: true },
    { id: '4', name: 'Maria Ward', image: 'https://img.freepik.com/free-photo/portrait-fair-haired-woman-with-warm-blue-eyes-dry-lips-healthy-skin-looking-directly-alluring-girl-with-beautiful-appearance-dressed-casually-posing_273609-7635.jpg', isFollowing: true },
    { id: '5', name: 'George Garrett', image: 'https://media.istockphoto.com/id/1025855432/photo/daylight-portrait-of-young-handsome-caucasian-man-isolated-on-grey-background-dressed-in.jpg?s=612x612&w=0&k=20&c=zvQW-kWUHtgY360LhcTi42yXqbtAzXEPU-jlSV3xAL8=', isFollowing: true },
    // Add more users up to 10
    { id: '6', name: 'Tyler Sanders', image: 'https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg', isFollowing: true },
    { id: '7', name: 'Betty Pierce', image: 'https://st4.depositphotos.com/13193658/25036/i/450/depositphotos_250363326-stock-photo-smiling-attractive-woman-white-sweater.jpg', isFollowing: true },
    { id: '8', name: 'Linda West', image: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D', isFollowing: true },
    { id: '9', name: 'Edward Rice', image: 'https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid', isFollowing: true },
    { id: '10', name: 'Samuel Morris', image: 'https://media.istockphoto.com/id/1025855432/photo/daylight-portrait-of-young-handsome-caucasian-man-isolated-on-grey-background-dressed-in.jpg?s=612x612&w=0&k=20&c=zvQW-kWUHtgY360LhcTi42yXqbtAzXEPU-jlSV3xAL8=', isFollowing: true },
  ]);

  // Count of users being followed (those with isFollowing set to true)
  const [followingCount, setFollowingCount] = useState(followingData.filter(user => user.isFollowing).length);

  const user = {
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s',
    username: 'Ayaka Kimble',
  };

   // Handle follow/unfollow button click
   const handleFollowToggle = (id) => {
    const updatedFollowingData = followingData.map((item) => {
      if (item.id === id) {
        // Toggle the follow status for the clicked user
        const isFollowing = !item.isFollowing;

        // If the user is being unfollowed, decrease the following count
        if (!isFollowing) {
          setFollowingCount(prevCount => prevCount - 1);
        } else {
          // If the user is followed again, increase the following count
          setFollowingCount(prevCount => prevCount + 1);
        }

        return { ...item, isFollowing };
      }
      return item;
    });

    setFollowingData(updatedFollowingData);
  };

  // Render the following list
  const renderFollowing = ({ item }) => (
    <View>
      <View style={styles.followingItem}>
        <Image source={{ uri: item.image }} style={styles.followingImage} />
        <Text style={styles.followingName}>{item.name}</Text>
        <TouchableOpacity 
        style={[styles.unfollowButton, { backgroundColor: item.isFollowing ? '#FFFFFF' : '#7BEE92' }]}
        onPress={() => handleFollowToggle(item.id)}
         >
           {/* Change button text based on follow status */}
          <Text style={styles.unfollowText}>{item.isFollowing ? 'Unfollow' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
    </View>
  );

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
        <Image source={require('../database/icons/alarm-bell.png')} resizeMode="contain" style={{ width: 30, height: 30, tintColor: '#FFFFFF' }} />
      </View>

      {/* Profile Section */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={[styles.username, { color: '#FFFFFF' }]}>{user.username}</Text>
      </View>

      {/* Tabs (Settings and Following) */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Settings')}>
          <Text style={[styles.tabText, activeTab === 'Settings' && styles.activeTabText]}>Settings</Text>
          {activeTab === 'Settings' && <View style={styles.activeTabBorder} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Following')}>
          {/* Dynamically render the count from followingData length */}
          <Text style={[styles.tabText, activeTab === 'Following' && styles.activeTabText]}>
            Following ({followingCount})
          </Text>
          {activeTab === 'Following' && <View style={styles.activeTabBorder} />}
        </TouchableOpacity>
      </View>

      {/* Conditional Content */}
      {activeTab === 'Settings' ? (
        // Settings Section
        <View style={styles.sectionContainer}>
  {/* <View style={styles.tabContainer}>
</View> */}
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
            tintColor: '#FFFFFF',
            marginLeft: 12
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
            marginRight: 16
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
            tintColor: '#FFFFFF',
            marginLeft: 12
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
            marginRight: 16
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
            tintColor: '#FFFFFF',
            marginLeft: 12
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
            tintColor: '#FFFFFF',
            marginRight: 16
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
            tintColor: '#FFFFFF',
            marginLeft: 12
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
            tintColor: '#FFFFFF',
            marginRight: 16
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
        </View>
      ) : (
        // Following Section
        <FlatList
          data={followingData}
          renderItem={renderFollowing}
          keyExtractor={item => item.id}
          style={styles.followingList}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
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
    width: 140,
    height: 140,
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
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    marginBottom: 30,
    borderBottomWidth: 0.8, // Thinner separator
    borderBottomColor: '#444', 
  },
  tabItem: {
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: '#757575', // Grey color for inactive tab
    textAlign: 'center',
    marginBottom: 5
  },
  activeTabText: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for active tab
    textAlign: 'center',
  },
  activeTabBorder: {
    marginTop: 8,
    marginBottom: -5, // Small gap between text and border
    height: 2.5, // Thinner border
    borderRadius: 18,
    backgroundColor: '#7BEE92', // Green color for the active tab
    width: '90%', // Full width for the border
    alignSelf: 'center',
  },
  sectionContainer: {
    marginBottom: 26,
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
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  notActiveText: {
    fontSize: 12,
    color: '#757575',
    marginRight: 12
  },
  header: {
    fontSize: 16,
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
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    color: '#A9A9A9',
    marginTop: 8,
  },
  settingItem: {
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingValue: {
    fontSize: 15,
  },
  settingLink: {
    fontSize: 15,
    fontWeight: '600',
  },
  followingList: {
    marginTop: - 18,
  },
  followingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  followingImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  followingName: {
    flex: 1,
    marginLeft: 15,
    color: '#FFFFFF',
    fontSize: 14.5,
    fontWeight:'bold'
  },
  unfollowButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 4,
  },
  unfollowText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 10,
  },
});

export default ProfileScreen;

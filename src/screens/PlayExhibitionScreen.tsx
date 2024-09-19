import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack'; 
import ModalContent from '../components/ModalContent';
import CustomModal from '../components/ConfirmationModal';

// Define your navigation stack params
type RootStackParamList = {
  Favorites: undefined;
  PlayExhibitionScreen: undefined; // Add other routes if needed
};

// Define the navigation prop type for this screen
type PlayExhibitionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayExhibitionScreen'>;

interface Props {
  navigation: PlayExhibitionScreenNavigationProp;
}

// Define the types for the devices
interface Device {
  id: string;
  name: string;
  icon: any; // You can replace 'any' with the correct type for the icons
}

const devices: Device[] = [
  { id: '1', name: 'LG L20233C', icon: require('../database/icons/television.png') },
  { id: '2', name: 'Sony TV - X950B', icon: require('../database/icons/television.png') },
  { id: '3', name: 'SMART - TV - 2039', icon: require('../database/icons/television.png') },
  { id: '4', name: 'Andrews Android', icon: require('../database/icons/smartphone.png') },
];

const PlayExhibitionScreen: React.FC<Props> = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('4'); // Default selection
  const [isModalVisible, setModalVisible] = useState(false); // State to manage modal visibility

  const renderDeviceItem = ({ item }: { item: Device }) => (
    <View style={styles.deviceItem}>
      <Image source={item.icon} style={styles.deviceIcon} />
      <Text style={styles.deviceText}>{item.name}</Text>
      <RadioButton
        value={item.id}
        status={selectedDevice === item.id ? 'checked' : 'unchecked'}
        onPress={() => setSelectedDevice(item.id)}
        uncheckedColor="#aaa"
        color="#77e68c"
      />
    </View>
  );

  // Function to handle "Play" button click
  const handlePlayPress = () => {
    setModalVisible(true); // Show the modal when Play is pressed
  };

  const handleConfirm = () => {
    console.log('Confirmed device:', selectedDevice);
    setModalVisible(false); // Close the modal after confirmation
  };

  const handleCancel = () => {
    setModalVisible(false); // Close the modal if cancelled
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Play Exhibition</Text>
        <TouchableOpacity>
          <Text style={styles.closeIcon}>close</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Select Device</Text>

      {/* Device List */}
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={renderDeviceItem}
        contentContainerStyle={styles.deviceList}
      />

      {/* Play Button */}
      <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>

      {/* Custom Modal */}
      <CustomModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        closeIcon={<Text style={{ color: '#fff', fontSize: 12 }}>Close</Text>}
        confirmIcon={<Text style={{ color: '#000', fontSize: 12, fontWeight: '600' }}>Yes</Text>}
        cancelIcon={<Text style={{ color: '#000', fontSize: 12, fontWeight: '600'}}>No</Text>}
      >
        <ModalContent
          deviceName={devices.find((device) => device.id === selectedDevice)?.name || ''}
          artworkName="House of Dragons Inpirations Artworks"
          itemCount={6} // Replace with dynamic content if needed
        />
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
  },
  closeIcon: {
    color: '#fff',
    fontSize: 24,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 15,
  },
  deviceList: {
    marginBottom: 30,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  deviceIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  deviceText: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
  },
  playButton: {
    backgroundColor: '#77e68c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayExhibitionScreen;

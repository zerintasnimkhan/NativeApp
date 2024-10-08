import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack'; 
import ModalContent from '../components/ModalContent';
import CustomModal from '../components/ConfirmationModal';
import DeleteModal from '../components/DeleteModal'; 
import CreateExhibitionModal from '../components/BottomSheet';
import BottomSheet from '../components/WaeTagsBottomSheet'; // Import the BottomSheet component

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

// Report options to display in the BottomSheet
const reportItems = [
  'Intellectual property infringement',
  "It's spam",
  'False Information',
  "I don't like it",
  'Hate speech or symbols',
  'Scam or fraud',
  'Nudity or sexual activity',
  'Bullying or harassment',
  'Violence or dangerous organisations',
];

const PlayExhibitionScreen: React.FC<Props> = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('4'); // Default selection
  const [isPlayModalVisible, setPlayModalVisible] = useState(false); // State to manage play modal visibility
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false); // State to manage delete modal visibility
  const [modalVisible, setModalVisible] = useState(false); // For Create Exhibition modal
  const [isReportVisible, setReportVisible] = useState(false); // For BottomSheet visibility

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleReportBottomSheet = () => {
    setReportVisible(!isReportVisible);
  };

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
    setPlayModalVisible(true); // Show the play modal when Play is pressed
  };

  // Function to handle "Delete" button click
  const handleDeletePress = () => {
    setDeleteModalVisible(true); // Show the delete modal when Delete is pressed
  };

  const handleConfirmPlay = () => {
    console.log('Confirmed device for play:', selectedDevice);
    setPlayModalVisible(false); // Close the modal after confirmation
  };

  const handleCancelPlay = () => {
    setPlayModalVisible(false); // Close the modal if cancelled
  };

  const handleConfirmDelete = () => {
    console.log('Exhibition deleted');
    setDeleteModalVisible(false); // Close the modal after deletion
    // Add further logic for deletion if needed
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false); // Close the modal if cancelled
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

      {/* Delete Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>

      {/* Report Button */}
      <TouchableOpacity style={styles.reportButton} onPress={toggleReportBottomSheet}>
        <Text style={styles.reportButtonText}>Report</Text>
      </TouchableOpacity>

      {/* Custom Play Modal */}
      <CustomModal
        visible={isPlayModalVisible}
        onClose={() => setPlayModalVisible(false)}
        onConfirm={handleConfirmPlay}
        onCancel={handleCancelPlay}
        closeIcon={<Text style={{ color: '#fff', fontSize: 12 }}>x</Text>}
        confirmIcon={<Text style={{ color: '#000', fontSize: 12, fontWeight: '600' }}>Yes</Text>}
        cancelIcon={<Text style={{ color: '#000', fontSize: 12, fontWeight: '600'}}>No</Text>}
      >
        <ModalContent
          deviceName={devices.find((device) => device.id === selectedDevice)?.name || ''}
          artworkName="House of Dragons Inspirations Artworks"
          itemCount={6} // Replace with dynamic content if needed
        />
      </CustomModal>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        visible={isDeleteModalVisible}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Delete Exhibition"
        description="Are you sure you want to delete this exhibition?"
      />

       {/* Create Exhibition Button */}
       <TouchableOpacity style={styles.createButton} onPress={toggleModal}>
        <Text style={styles.createButtonText}>Create Exhibition</Text>
      </TouchableOpacity>

      {/* Reusable Create Exhibition Modal */}
      <CreateExhibitionModal isVisible={modalVisible} onClose={toggleModal} />

      {/* Report BottomSheet */}
      <BottomSheet 
        isVisible={isReportVisible}
        onClose={toggleReportBottomSheet}
        title="Report"
        subtitle="Please select the reason you would like to report this content."
        items={reportItems} onCancel={function (): void {
          throw new Error('Function not implemented.');
        } }      />
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
  deleteButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reportButton: {
    backgroundColor: '#f39c12',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  reportButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayExhibitionScreen;

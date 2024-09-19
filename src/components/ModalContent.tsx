import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Separator from './separator';

interface ModalContentProps {
  deviceName: string;
  artworkName: string;
  itemCount: number;
}

const ModalContent: React.FC<ModalContentProps> = ({ deviceName, artworkName, itemCount }) => {
  return (
    <View style={styles.contentWrapper}>
       {/* <View style={styles.iconContainer}>
      <Image source={require('../database/images/modalImage.png')} style={styles.icon} />
      </View> */}

<TouchableOpacity style={styles.iconContainer}>
                <Image source={require('../database/icons/television.png')} style={styles.icon} />
              </TouchableOpacity>
      <Text style={styles.titleText}>Are you sure you want to connect to device?</Text>
      <Text style={styles.subtitleText}>You will be playing exhibition on</Text>
      <Text style={styles.deviceNameText}>{deviceName}</Text>

      <View style={styles.divider} />
      {/* <Separator/> */}

      <Text style={styles.artworkText}>{artworkName}</Text>
      <Text style={styles.itemCountText}>{itemCount} Items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 2,
    elevation: 4,
    marginBottom: 30,
    marginTop: -20
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#FFFFFF',
    // margin: 20,
    backgroundColor: '#333'
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  deviceNameText: {
    color: '#aaa',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    width: '80%',           // Ensure it's wide enough for visibility
    height: StyleSheet.hairlineWidth, // You can try this for a thin line or increase the height
    backgroundColor: 'red', // Ensure the color contrasts with the background
    marginVertical: 15,      // Add some space above and below the divider
    alignSelf: 'center',  
    marginBottom: 18   // Ensure it is centered horizontally
  },
  artworkText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  itemCountText: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default ModalContent;

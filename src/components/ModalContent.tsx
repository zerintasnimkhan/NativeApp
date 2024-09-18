import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ModalContentProps {
  deviceName: string;
  artworkName: string;
  itemCount: number;
}

const ModalContent: React.FC<ModalContentProps> = ({ deviceName, artworkName, itemCount }) => {
  return (
    <View style={styles.contentWrapper}>

      {/* Modal Text */}
      <Text style={styles.titleText}>Are you sure you want to connect to device?</Text>
      <Text style={styles.subtitleText}>You will be playing exhibition on</Text>
      <Text style={styles.deviceNameText}>{deviceName}</Text>

      <View style={styles.divider} />

      {/* Artwork Details */}
      <Text style={styles.artworkText}>{artworkName}</Text>
      <Text style={styles.itemCountText}>{itemCount} Items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
  },
  iconStyle: {
    marginBottom: 20,
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 15,
  },
  artworkText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  itemCountText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ModalContent;

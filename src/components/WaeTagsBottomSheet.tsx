import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Image } from 'react-native';
import Separator from './separator';

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  onCancel: () => void;
  title: string; // Add title prop
  subtitle: string;
  items: string[]; // Add items prop for list of report reasons
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isVisible, onClose, title, subtitle, items }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.sheet}>
        <View style={styles.header}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Image
                source={require('../database/icons/close.png')} // Path to your close icon image
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                  <Image
                    source={require('../database/icons/next.png')}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: '#FFFFFF',
                      marginRight: -6
                    }}
                  />
                </TouchableOpacity>
                {/* Separator */}
                <View style={styles.separator} />
              </>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'black',
    padding: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titleContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10
  },
  subtitle: {
    color: 'grey',
    fontSize: 15,
    marginTop: 26,
    lineHeight: 24

  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    width: 20, // Set the width of the close icon
    height: 20, // Set the height of the close icon
    tintColor: '#fff',
    marginRight: -10,
    marginTop: -40
  },
  item: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#fff'
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 5,
  },
});

export default BottomSheet;

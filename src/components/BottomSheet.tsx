import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
// import { MaterialIcons } from '@expo/vector-icons';

interface CreateExhibitionModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CreateExhibitionModal: React.FC<CreateExhibitionModalProps> = ({ isVisible, onClose }) => {
  const [checked, setChecked] = useState('quick');

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.content}>
        {/* Modal Title */}
        <View style={styles.header}>
          <Text style={styles.title}>Create Exhibition</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Exhibition Option */}
        <TouchableOpacity style={styles.option} onPress={() => setChecked('quick')}>
          {/* <MaterialIcons name="schedule" size={24} color="white" style={styles.icon} /> */}
          <View style={styles.container}>
            <Text style={styles.optionText}>Create Quick Exhibition</Text>
            <Text style={styles.subText}>
              Your selected artworks will be played into your selected device.
            </Text>
          </View>
          <RadioButton
            value="quick"
            status={checked === 'quick' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('quick')}
            color="#77e68c"
            uncheckedColor="#FFFFFF"
          />
        </TouchableOpacity>

        {/* Custom Exhibition Option */}
        <TouchableOpacity style={styles.option} onPress={() => setChecked('custom')}>
          {/* <MaterialIcons name="photo-library" size={24} color="white" style={styles.icon} /> */}
          <View style={styles.container}>
            <Text style={styles.optionText}>Create Custom Exhibition</Text>
            <Text style={styles.subText}>
              You will create a new exhibition with the selected artwork.
            </Text>
          </View>
          <RadioButton
            value="custom"
            status={checked === 'custom' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('custom')}
            color="#77e68c"
            uncheckedColor="#FFFFFF"
          />
        </TouchableOpacity>

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton} onPress={onClose}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: '#181818',
    padding: 16,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'flex-start',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 14,
    marginBottom: 10
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 2,
    
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '100%',
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginBottom: -14
  },
  optionText: {
    fontSize: 17,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 14,
    color: '#C0C0C0',
    marginTop: 5,
    marginRight: 20
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  proceedButton: {
    marginTop: 40,
    backgroundColor: '#77e68c',
    padding: 13,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default CreateExhibitionModal;

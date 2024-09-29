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
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image
        source={require('../database/icons/play.png')}
        style={styles.icon}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.optionText}>Create Quick Exhibition</Text>
      <Text style={styles.subText}>
        Your selected artworks will be played into your selected device.
      </Text>
    </View>
    <View style={styles.radiobuttonContainer}>
    <RadioButton
      value="quick"
      status={checked === 'quick' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('quick')}
      color="#77e68c"
      uncheckedColor="#FFFFFF"
    //   style={styles.radioButton} // Optional if you want to add more styling to the RadioButton
    />
    </View>
  </View>
</TouchableOpacity>


    {/* Custom Exhibition Option */}
 <TouchableOpacity style={styles.option} onPress={() => setChecked('quick')}>
   <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image
        source={require('../database/icons/image-gallery.png')}
        style={styles.icon}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.optionText}>Create Custom Exhibition</Text>
      <Text style={styles.subText}>
      You will create a new exhibition with the selected artwork.
      </Text>
    </View>
    <View style={styles.radiobuttonContainer}>
    <RadioButton
      value="quick"
      status={checked === 'quick' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('quick')}
      color="#77e68c"
      uncheckedColor="#FFFFFF"
    //   style={styles.radioButton} // Optional if you want to add more styling to the RadioButton
    />
    </View>
  </View>
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
    marginTop: 14,
    marginLeft: -8
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
    right: 10,
    top: -16,
    
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 33,
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
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: -14
  },
  radiobuttonContainer: {
    marginTop: 18
  },
  textContainer: {
    flex: 1, // Let the text take the remaining space
    marginRight: 10, // Space between text and 
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 14,
    color: '#C0C0C0',
    marginTop: 5,
    marginRight: 20,
    lineHeight: 22
  },
  icon: {
    // marginRight: 10,
    width: 26,
    height: 26,
    tintColor: '#fff',
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 24,
    marginRight: 14,
    marginLeft: -10
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

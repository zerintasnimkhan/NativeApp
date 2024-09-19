import React, { ReactNode } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
  closeIcon: ReactNode | string;   // Accept string or element
  confirmIcon: ReactNode | string;
  cancelIcon: ReactNode | string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  onConfirm,
  onCancel,
  children,
  closeIcon,
  confirmIcon,
  cancelIcon,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Icon */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            {typeof closeIcon === 'string' ? <Text>{closeIcon}</Text> : closeIcon}
          </TouchableOpacity>

          {/* Content Section */}
          <View style={styles.contentContainer}>
            {children}
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              {typeof confirmIcon === 'string' ? <Text>{confirmIcon}</Text> : confirmIcon}
            </TouchableOpacity>
            <TouchableOpacity style={styles.noButton} onPress={onCancel}>
              {typeof cancelIcon === 'string' ? <Text>{cancelIcon}</Text> : cancelIcon}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20, // Ensure padding is not clipping the content
    minHeight: '20%',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    paddingVertical: 20,
    position: 'relative',
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 20,
    marginLeft: -15,
    marginRight: -15,
    marginTop: -8,
    marginBottom: -20
  },
  yesButton: {
    backgroundColor: '#77e68c',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 57,
  },
  noButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 57,
  },
});

export default CustomModal;

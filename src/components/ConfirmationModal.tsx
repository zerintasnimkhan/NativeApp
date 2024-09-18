import React, { ReactNode } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
  closeIcon: ReactNode;     // Icon for the close button
  confirmIcon: ReactNode;   // Icon for the confirm button
  cancelIcon: ReactNode;    // Icon for the cancel button
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
            {closeIcon} {/* Use closeIcon prop */}
          </TouchableOpacity>

          {/* Content Section */}
          <View style={styles.contentContainer}>
            {children}
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              {confirmIcon} {/* Use confirmIcon prop */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.noButton} onPress={onCancel}>
              {cancelIcon} {/* Use cancelIcon prop */}
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
  },
  modalContent: {
    width: 300,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  yesButton: {
    backgroundColor: '#77e68c',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  noButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default CustomModal;

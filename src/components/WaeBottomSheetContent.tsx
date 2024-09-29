import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BottomSheetContentProps {
  items: string[];
}

const BottomSheetContent: React.FC<BottomSheetContentProps> = ({ items }) => {
  return (
    <View style={styles.contentContainer}>
        <Text style={styles.selectText}>Please slect the reason you would like to report this content.</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 15,
  },
  selectText:{
   color: '#fff',
   fontSize: 12
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
});

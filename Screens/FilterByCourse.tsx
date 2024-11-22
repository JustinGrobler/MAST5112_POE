import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function FilterByCourseScreen({
  menuItems,
}: {
  menuItems: any[];
}) {
  const [selectedCourse, setSelectedCourse] = useState<string>('Starters');

  const filteredItems = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.title}>Filter Menu By Course</Text>
      </View>

      {}
      <Text style={styles.label}>Choose Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={(itemValue: string) => setSelectedCourse(itemValue)} 
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      {}
      <View style={styles.menuContainer}>
        <Text style={styles.label}>Filtered Items:</Text>
        {filteredItems.length === 0 ? (
          <Text>No items available for this course.</Text>
        ) : (
          filteredItems.map((item, index) => (
            <Text key={index} style={styles.menuItem}>
              {item.name} - {item.description} (R{item.price})
            </Text>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4', 
  },
  header: {
    width: '100%',
    backgroundColor: '#556B2F', 
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center', 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#fff', 
    borderRadius: 5,
    height: 50, 
  },
  pickerItem: {
    fontSize: 20, 
    height: 50, 
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

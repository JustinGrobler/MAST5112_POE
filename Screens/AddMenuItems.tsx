import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddMenuItemsScreen({
  menuItems,
  addMenuItem,
  removeMenuItem,
}: {
  menuItems: any[];
  addMenuItem: any;
  removeMenuItem: any;
}) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const newItem = { name: dishName, description, course, price };
    addMenuItem(newItem); 

    setDishName('');
    setDescription('');
    setCourse('Starters');
    setPrice('');
    Alert.alert('Item added successfully');
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.title}>Add or Remove Menu Item</Text>
      </View>

      {}
      <Text>Dish Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        onChangeText={(text) => setDishName(text)}
        value={dishName}
      />

      <Text>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />

      <Text>Course:</Text>
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <Text>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        onChangeText={(text) => setPrice(text)}
        value={price}
      />

      {}
      <Button
        title="Add Menu Item"
        onPress={handleAddItem}
        color="#556B2F"  
      />

      {}
      <View style={styles.menuContainer}>
        <Text style={styles.subtitle}>Current Menu Items:</Text>
        {menuItems.length === 0 ? (
          <Text>No items added yet.</Text>
        ) : (
          menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Text>
                {item.name} - {item.description} ({item.course}) - R{item.price}
              </Text>
              <Button
                title="Remove"
                onPress={() => removeMenuItem(index)} 
                color="red"
              />
            </View>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    width: '100%',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    marginVertical: 10,
  },
});

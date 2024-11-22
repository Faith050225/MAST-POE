import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Import Picker from the new package

const AddMenuItem = ({ route, navigation }: { route: any, navigation: any }) => {
  const { addMenuItem } = route.params;  // Receive addMenuItem function as a parameter from the HomeScreen

  // State for new menu item fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Appetizer');

  // Function to handle adding the menu item
  const handleAddItem = () => {
    if (name && description && price && course) {
      const newItem = {
        id: Math.random().toString(),  // Generate a unique id
        name,
        description,
        price,
        course,
      };

      // Call addMenuItem to update the menu items in HomeScreen
      addMenuItem(newItem);

      // Go back to HomeScreen
      navigation.goBack();
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Appetizer" value="Appetizer" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
        <Picker.Item label="Salad" value="Salad" />
        <Picker.Item label="Beverage" value="Beverage" />
      </Picker>

      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  picker: {
    height: 50,
    marginBottom: 12,
  },
});

export default AddMenuItem;
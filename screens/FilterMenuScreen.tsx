import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FilterMenuScreen = ({ route, navigation }) => {
  const { menuItems = [] } = route.params || {}; // Fallback for undefined or missing menuItems
  const [selectedCourse, setSelectedCourse] = useState('');

  // Function to filter menu items by course
  const filterMenuByCourse = (course) => {
    setSelectedCourse(course);
  };

  // Filtered menu items based on the selected course
  const filteredItems = selectedCourse
    ? menuItems.filter((item) => item.course === selectedCourse)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>

      {/* Filter Buttons */}
      <FlatList
        data={['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Salad', ]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          const isSelected = selectedCourse === item || (item === 'All' && selectedCourse === '');
          return (
            <TouchableOpacity
              style={[styles.filterButton, isSelected && styles.selectedButton]}
              onPress={() => filterMenuByCourse(item === 'All' ? '' : item)}
            >
              <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.filterButtons}
      />

      {/* Picker for Course Selection */}
      <Text style={styles.pickerLabel}>Select Course</Text>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => filterMenuByCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All" value="" />
        <Picker.Item label="Appetizer" value="Appetizer" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
        <Picker.Item label="Beverage" value="Beverage" />
        <Picker.Item label="Salad" value="Salad" />
      </Picker>

      {/* Display Filtered Menu Items */}
      {filteredItems.length > 0 ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.course}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No items found for the selected category.</Text>
      )}
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
  filterButtons: {
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  selectedButtonText: {
    color: 'white',
  },
  menuItem: {
    marginBottom: 16,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
});

export default FilterMenuScreen;
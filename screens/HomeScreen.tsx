import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Bruschetta', description: 'Grilled bread with tomato, basil, and garlic.', price: '55.00', course: 'Appetizer' },
    { id: '2', name: 'Grilled Salmon', description: 'A classic main course.', price: '20.00', course: 'Main Course' },
    { id: '3', name: 'Chocolate Mousse', description: 'A rich dessert with chocolate.', price: '62.00', course: 'Dessert' },
    { id: '4', name: 'Caesar Salad', description: 'Fresh lettuce with Caesar dressing, croutons, and Parmesan.', price: '102.00', course: 'Salad' },
    { id: '5', name: 'Lobster Risotto', description: 'Creamy risotto with chunks of lobster.', price: '55.00', course: 'Main Course' },
    { id: '6', name: 'Red Wine', description: 'A glass of full-bodied red wine.', price: '48.00', course: 'Beverage' },
    { id: '7', name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: '46.00', course: 'Appetizer' },
    { id: '8', name: 'Penne Arrabbiata', description: 'Pasta with a spicy tomato sauce.', price: '44.00', course: 'Main Course' },
    { id: '9', name: 'Tiramisu', description: 'A classic Italian dessert with coffee and mascarpone.', price: '59.00', course: 'Dessert' },
    { id: '10', name: 'Iced Tea', description: 'Refreshing iced tea with lemon.', price: '25.00', course: 'Beverage' },
  ]);

  const totalMenuItems = menuItems.length;

  // Function to calculate the average price per course
  const calculateAveragePriceByCourse = () => {
    const coursePrices: { [key: string]: number[] } = {};

    menuItems.forEach((item) => {
      if (!coursePrices[item.course]) {
        coursePrices[item.course] = [];
      }
      coursePrices[item.course].push(parseFloat(item.price));
    });

    const averages: { [key: string]: string } = {};
    for (const course in coursePrices) {
      const prices = coursePrices[course];
      const average = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      averages[course] = average.toFixed(2);
    }

    return averages;
  };

  const averages = calculateAveragePriceByCourse();

  // Function to remove a menu item
  const removeMenuItem = (id: string) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to add a new menu item with adjusted price
  const addMenuItem = (newItem: { id: string; name: string; description: string; price: string; course: string }) => {
    const adjustPrice = (price: number, course: string): number => {
      let multiplier = 1; // Default multiplier (no increase)
      if (course === 'Appetizer') multiplier = 1.10; // 10% increase
      else if (course === 'Main Course') multiplier = 1.15; // 15% increase
      else if (course === 'Dessert') multiplier = 1.05; // 5% increase
      else if (course === 'Salad') multiplier = 1.07; // 7% increase
      else if (course === 'Beverage') multiplier = 1.03; // 3% increase

      return parseFloat((price * multiplier).toFixed(2)); // Adjust and round price
    };

    // Adjust the price of the new item
    const adjustedPrice = adjustPrice(parseFloat(newItem.price), newItem.course);

    // Add the new item with the adjusted price
    setMenuItems((prevItems) => [
      ...prevItems,
      { ...newItem, price: adjustedPrice.toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Chef Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/cheff.jpeg')} // Replace with a valid image URL
          style={styles.profileImage}
        />
        <Text style={styles.chefName}>Chef Christoffel</Text>
      </View>

      {/* Menu Section */}
      <Text style={styles.header}>Menu</Text>
      <Text>Total Menu Items: {totalMenuItems}</Text>

      {/* Average Prices by Course */}
      <View style={styles.averagesContainer}>
        <Text style={styles.averagesHeader}>Average Prices by Course:</Text>
        {Object.entries(averages).map(([course, avgPrice]) => (
          <Text key={course} style={styles.averagePrice}>
            {course}: ${avgPrice}
          </Text>
        ))}
      </View>

      {/* Menu Items List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text>${item.price}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <TouchableOpacity onPress={() => removeMenuItem(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem', { addMenuItem })} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('FilterMenu', { menuItems })} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chefName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  averagesContainer: {
    marginVertical: 16,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  averagesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  averagePrice: {
    fontSize: 16,
    color: '#333',
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
  removeButton: {
    color: 'red',
    marginTop: 10,
    textAlign: 'right',
  },
});

export default HomeScreen;
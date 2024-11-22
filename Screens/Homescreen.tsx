import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({
  menuItems,
  navigation,
}: {
  menuItems: any[];
  navigation: any;
}) {

  const calculateAveragePrice = (course: string) => {
    const filteredItems = menuItems.filter(item => item.course === course);

    if (filteredItems.length === 0) return 0; 

    const totalPrice = filteredItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

    return totalPrice / filteredItems.length;
  };

  const averageStartersPrice = calculateAveragePrice('Starters');
  const averageMainsPrice = calculateAveragePrice('Mains');
  const averageDessertsPrice = calculateAveragePrice('Desserts');

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.title}>Christoffel's Private Menu</Text>
      </View>

      {}
      <Text style={styles.totalItems}>Total Items: {menuItems.length}</Text>

      {}
      {menuItems.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item.name} - {item.description} ({item.course}) - R{item.price}</Text>
        </View>
      ))}

      {}
      <View style={styles.averagesContainer}>
        <Text style={styles.averageText}>Average Price for Starters: R{averageStartersPrice.toFixed(2)}</Text>
        <Text style={styles.averageText}>Average Price for Mains: R{averageMainsPrice.toFixed(2)}</Text>
        <Text style={styles.averageText}>Average Price for Desserts: R{averageDessertsPrice.toFixed(2)}</Text>
      </View>

      {}
      <View style={styles.buttonContainer}>
        <Button 
          title="Add Menu Items" 
          onPress={() => navigation.navigate('AddMenuItems')} 
          color="#556B2F"  
        />
        <Button 
          title="Filter By Course" 
          onPress={() => navigation.navigate('FilterByCourse')} 
          color="#556B2F"  
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center', 
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
  },
  totalItems: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 10, 
  },
  item: {
    marginBottom: 10,
    textAlign: 'center', 
  },
  averagesContainer: {
    marginTop: 20,
    backgroundColor: '#e3e3e3', 
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  averageText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8, 
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

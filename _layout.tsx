import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Homescreen';
import AddMenuItemsScreen from './Screens/AddMenuItems';
import FilterByCourseScreen from './Screens/FilterByCourse';

const Stack = createStackNavigator();

export default function Layout() {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const addMenuItem = (item: { name: string; description: string; course: string; price: string }) => {
    setMenuItems([...menuItems, item]);
  };

  const removeMenuItem = (index: number) => {
    const updatedItems = menuItems.filter((_, itemIndex) => itemIndex !== index);
    setMenuItems(updatedItems);
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={(props: any) => (
          <HomeScreen {...props} menuItems={menuItems} removeMenuItem={removeMenuItem} />
        )}
      />
      <Stack.Screen
        name="AddMenuItems"
        component={(props: any) => (
          <AddMenuItemsScreen
            {...props}
            menuItems={menuItems}
            addMenuItem={addMenuItem}
            removeMenuItem={removeMenuItem}
          />
        )}
      />
      <Stack.Screen
        name="FilterByCourse"
        component={(props: any) => <FilterByCourseScreen {...props} menuItems={menuItems} />}
      />
    </Stack.Navigator>
  );
}

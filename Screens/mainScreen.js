import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  const categories = ['Ensaladas', 'Postres', 'Pizzas'];

  const dishes = [
    { id: 1, name: 'Ensalada César', category: 'Ensaladas', image: require('../assets/salad.jpg') },
    { id: 2, name: 'Tiramisú', category: 'Postres', image: require('../assets/tiramisu.jpg') },
    { id: 3, name: 'Pizza Margarita', category: 'Pizzas', image: require('../assets/pizza.jpg') },
    { id: 4, name: 'Ensalada  de Quinoa', category: 'Ensaladas', image: require('../assets/ensaladaQ.jpg') },
    { id: 5, name: 'Ensalada  de Pollo', category: 'Ensaladas', image: require('../assets/ensaladaP.jpg') },
    { id: 6, name: 'Ensalada   de Tomate y Cebolla', category: 'Ensaladas', image: require('../assets/ensaladaTC.jpg') },
    { id: 7, name: 'Ensalada Atún', category: 'Ensaladas', image: require('../assets/ensaladaAT.jpg') },
    { id: 8, name: 'Ensalada con Arroz', category: 'Ensaladas', image: require('../assets/ensaladaA.jpg') },
    { id: 9, name: 'Pay de queso', category: 'Postres', image: require('../assets/pq.jpg') },
    { id: 10, name: 'Pastel 3 leches', category: 'Postres', image: require('../assets/p3.jpg') },
    { id: 11, name: 'Pay de limón', category: 'Postres', image: require('../assets/pl.jpg') },
    { id: 12, name: 'Gelatina',  category: 'Postres', image: require('../assets/gl.jpg') },
    { id: 13, name: 'Pizza Capriciosa', category: 'Pizzas', image: require('../assets/pc.jpg') },
    { id: 14, name: 'Pizza Provolone', category: 'Pizzas', image: require('../assets/pp.jpg') },
    { id: 15, name: 'Pizza Margherita', category: 'Pizzas', image: require('../assets/pm.jpg') }
    // agregar más comida por catergoría
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleDishPress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleDishPress = (dish) => {
    // futura navegación a pantalla de platillo
    console.log(`Platillo seleccionado: ${dish.name}`);
  };

  const handleCategoryPress = (category) => {
    // Categoría seleccionada
    console.log(`Categoría seleccionada: ${category}`);
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        {categories.map((category) => (
          <Tab.Screen key={category} name={category}>
            {() => (
              <FlatList
                data={dishes.filter((dish) => dish.category === category)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
              />
            )}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardTitle: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MainScreen;

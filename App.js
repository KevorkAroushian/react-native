import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AllPlaces from './src/components/AllPlaces';
import FavoritePlaces from './src/components/FavoritePlaces';
// import { images } from './src/assets/images/images';
import { placesData } from './utils/images.js';

// const placesData = [
//   { id: '1', name: 'The Cozy Café', image: images.cozyCafe },
//   { id: '2', name: 'Gourmet Restaurant', image: images.gourmetRestaurant },
//   { id: '3', name: 'Sunny Bakery', image: images.sunnyBakery },
//   { id: '4', name: 'Vintage Coffee Shop', image: images.vintageCoffeeShop },
//   { id: '5', name: 'Modern Bistro', image: images.modernBistro },
//   { id: '6', name: 'Ocean View Diner', image: images.oceanViewDiner },
//   { id: '7', name: 'Mountain Restaurant', image: images.mountainRestaurant },
//   { id: '8', name: 'Urban Grill', image: images.urbanGrill },
//   { id: '9', name: 'Seafood Haven', image: images.seafoodHaven },
//   { id: '10', name: 'Classic Café', image: images.classicCafe },
//   { id: '11', name: 'Rooftop Bar', image: images.rooftopBar },
//   { id: '12', name: 'Garden Restaurant', image: images.gardenRestaurant },
//   { id: '13', name: 'Downtown Diner', image: images.downtownDiner },
//   { id: '14', name: 'Breezy Café', image: images.breezyCafe },
//   { id: '15', name: 'City Bistro', image: images.cityBistro },
//   { id: '16', name: 'Lakeview Café', image: images.lakeviewCafe },
//   { id: '17', name: 'Street Food Corner', image: images.streetFoodCorner },
//   { id: '18', name: 'Cafe Mocha', image: images.cafeMocha },
//   { id: '19', name: 'Sushi Bar', image: images.sushiBar },
//   { id: '20', name: 'The French Café', image: images.frenchCafe },
// ];

const App = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  const addFavorite = (place) => {
    if (!isFavorite(place)) {
      setFavoritePlaces([...favoritePlaces, place]);
    }
  };

  const removeFavorite = (place) => {
    setFavoritePlaces(favoritePlaces.filter(fav => fav.id !== place.id));
  };

  const isFavorite = (place) => {
    return favoritePlaces.some(fav => fav.id === place.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Places</Text>

      <AllPlaces placesData={placesData} addFavorite={addFavorite} isFavorite={isFavorite} />
      <FavoritePlaces favoritePlaces={favoritePlaces} removeFavorite={removeFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default App;

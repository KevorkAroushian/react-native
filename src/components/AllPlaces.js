import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PlaceCard from './PlaceCard';

const AllPlaces = ({ placesData, addFavorite, isFavorite }) => {
  return (
    <>
      <Text style={styles.sectionTitle}>All Places</Text>
      <FlatList
        data={placesData.filter((place) => !isFavorite(place))}
        renderItem={({ item }) => (
          <PlaceCard place={item} onFavorite={addFavorite} isFavorite={isFavorite(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.columnWrapper}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default AllPlaces;

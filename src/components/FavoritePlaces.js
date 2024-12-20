import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PlaceCard from './PlaceCard';

const FavoritePlaces = ({ favoritePlaces, removeFavorite }) => {
  return (
    <>
      <Text style={styles.sectionTitle}>Favorite Places</Text>
      <FlatList
        data={favoritePlaces}
        renderItem={({ item }) => (
          <PlaceCard place={item} isFavorite={true} onRemove={removeFavorite} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.noFavoritesText}>No favorite places added yet.</Text>}
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
  noFavoritesText: {
    textAlign: 'center',
    color: '#777',
    fontStyle: 'italic',
  },
});

export default FavoritePlaces;

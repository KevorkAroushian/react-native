import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PlaceCard = ({ place, onFavorite, isFavorite, onRemove }) => {
  return (
    <View style={styles.placeCard}>
      <Image source={place.image} style={styles.placeImage} />
      <Text style={styles.placeName}>{place.name}</Text>
      <TouchableOpacity
        onPress={() => (isFavorite ? onRemove(place) : onFavorite(place))}
        style={[styles.starButton, isFavorite && styles.favorited]}>
        <Text style={styles.star}>{isFavorite ? '★' : '☆'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  placeCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    width: '22%',
    height: 180,
    alignItems: 'center',
    elevation: 5,
  },
  placeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  placeName: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  starButton: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  star: {
    fontSize: 28,
    color: 'gold',
  },
  favorited: {
    color: '#FFD700',
  },
});

export default PlaceCard;

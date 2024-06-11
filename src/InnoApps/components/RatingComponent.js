import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const RatingComponent = ({rating = 5}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.star} source={require('../assets/icons/star.png')} />
      <Text style={styles.text}>{rating}</Text>
    </View>
  );
};

export default RatingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 11,
    backgroundColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
  },

  star: {
    height: 12,
    width: 12,
    marginRight: 5,
  },
  text: {
    fontWeight: '600',
    fontSize: 11,
    color: 'white',
  },
});

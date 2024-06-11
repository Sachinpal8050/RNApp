import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import RatingComponent from './RatingComponent';

const PropertyCard = props => {
  const {
    rating = 9,
    title = 'Modern House',
    address = 'Gualala, CA 9442',
    price = '512',
    couch = 5,
    bathtub = 2,
    area = 5600,
    limit = 6,
  } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/House.png')}>
        <RatingComponent rating={rating} />
      </ImageBackground>
      <View style={styles.infoCon}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{address}</Text>
        </View>
        <View style={styles.leftCon}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.price1}> /night</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.bottomCon}>
        <View style={styles.bottomConItem}>
          <Image
            source={require('../assets/icons/couch.png')}
            style={styles.btmImg}
          />
          <Text style={styles.bottonText}>{couch}</Text>
        </View>
        <View style={styles.bottomConItem}>
          <Image
            source={require('../assets/icons/bathtub.png')}
            style={styles.btmImg}
          />
          <Text style={styles.bottonText}>{bathtub}</Text>
        </View>
        <View style={styles.bottomConItem}>
          <Image
            source={require('../assets/icons/Group.png')}
            style={styles.btmImg}
          />
          <Text style={styles.bottonText}>Up to {limit}</Text>
        </View>
        <View style={styles.bottomConItem}>
          <Image
            source={require('../assets/icons/home.png')}
            style={styles.btmImg}
          />
          <Text style={styles.bottonText}>{area} sqft</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 8,
    borderColor: '#ACACAC',
    borderRadius: 6,
  },
  image: {
    height: 122,
    resizeMode: 'contain',
  },
  infoCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  leftCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    marginVertical: 12,
  },
  bottomCon: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  bottomConItem: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 3,
  },
  subTitle: {
    color: '#8F8F8F',
    fontWeight: '600',
    fontSize: 10,
  },
  price: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 19,
  },
  price1: {
    color: '#8F8F8F',
    fontWeight: '600',
    fontSize: 16,
  },
  bottonText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 12,
  },
});

import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropertyCard from '../components/PropertyCard';
import {SAMPLE_DATA} from '../data/sampleData';
import Header from '../components/Header';

const HomeScreen = () => {
  const renderFooterComponent = useCallback(() => {
    return (
      <View>
        <View style={styles.showMoreCon}>
          <Text style={styles.btnText}>Show more places</Text>
          <Image
            style={styles.arrow}
            source={require('../assets/icons/arrow.png')}
          />
        </View>
        <View style={styles.bigImgCon}>
          <ImageBackground
            style={styles.bigHomeImg}
            borderRadius={8}
            source={require('../assets/BigHOme.png')}>
            <View style={styles.imgContentCOn}>
              <View style={styles.imgTextCon}>
                <Text style={styles.mainTitle}>Premium Booking</Text>
                <Text style={styles.subTitle}>
                  A selection of places to stay verified for quality and design
                </Text>
              </View>
              <View style={[styles.showMoreCon, styles.showMoreCon2]}>
                <Text style={[styles.btnText, {color: 'black'}]}>
                  Show more places
                </Text>
                <Image
                  tintColor={'black'}
                  style={styles.arrow}
                  source={require('../assets/icons/arrow.png')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Featured places" subtitle="Find 86 places:" />
      <FlatList
        data={SAMPLE_DATA}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <PropertyCard {...item} />
            </View>
          );
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        ListFooterComponent={renderFooterComponent}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  card: {
    marginBottom: 20,
  },
  list: {
    marginTop: 24,
  },
  showMoreCon: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  bigHomeImg: {
    height: 269,
    justifyContent: 'flex-end',
  },
  bigImgCon: {
    marginVertical: 22,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  imgContentCOn: {
    justifyContent: 'flex-end',
  },
  imgTextCon: {
    alignItems: 'center',
  },
  mainTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
  },
  subTitle: {
    color: '#ADADAD',
    fontSize: 11,
    fontWeight: '400',
    marginVertical: 15,
    marginHorizontal: 30,
    textAlign: 'center',
  },
  showMoreCon2: {
    marginHorizontal: 13,
    backgroundColor: 'white',
    marginBottom: 13,
    justifyContent: 'center',
    marginRight: 10,
  },
  arrow: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
});

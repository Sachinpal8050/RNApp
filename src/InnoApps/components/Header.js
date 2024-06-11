import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title = '', subtitle = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 21,
  },
  title: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 25,
  },
  subtitle: {
    fontWeight: '600',
    color: '#999999',
    fontSize: 14,
  },
});

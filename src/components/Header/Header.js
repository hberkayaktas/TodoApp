import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header() {
  return <View><Text style={styles.header_title}>TodoApp v.1</Text></View>;
}

export default Header;

const styles = StyleSheet.create({
  header_title: {
    padding: 5,
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#876445',
  },
});

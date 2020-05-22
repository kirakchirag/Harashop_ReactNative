import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Flour from '../../assets/flour';

const category = ({title, src}) => {
  return (
    <View>
      <Flour style={styles.imageStyle} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default category;

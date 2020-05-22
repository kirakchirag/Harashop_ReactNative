import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {encode as btoa} from 'base-64';
const productDetail = ({result, list}) => {
  let TYPED_ARRAY = new Uint8Array(result.product_image.data);
  const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
    return data + String.fromCharCode(byte);
  }, '');
  let base64String = btoa(STRING_CHAR);

  return (
    <ScrollView>
      {list === 'horizontal' ? (
        <View style={styles.viewStyleHorizontal}>
          <Image
            style={styles.imageStyleHorizontal}
            source={{uri: `data:image/png;base64,${base64String}`}}
          />
          <Text style={styles.textStyleHorizontal}>{result.product_name}</Text>
          <View style={styles.priceStyle}>
            <Text>{result.price} Rs. </Text>
            {result.discount ? (
              <Text style={{fontWeight: 'bold'}}>
                {result.discount} Rs. Discount
              </Text>
            ) : null}
          </View>
        </View>
      ) : (
        <View style={styles.viewStyleVertical}>
          <Image
            style={styles.imageStyleVertical}
            source={{uri: `data:image/png;base64,${base64String}`}}
          />
          <Text style={styles.textStyleVertical}>{result.product_name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>{result.price} Rs. </Text>
            {result.discount ? (
              <Text style={{fontWeight: 'bold'}}>
                {result.discount} Rs. Discount
              </Text>
            ) : null}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyleHorizontal: {
    marginLeft: 20,
  },
  viewStyleVertical: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textStyleHorizontal: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  textStyleVertical: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imageStyleHorizontal: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  imageStyleVertical: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  priceStyle: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});

export default productDetail;

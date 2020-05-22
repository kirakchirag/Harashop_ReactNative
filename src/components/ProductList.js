import React, {useContext} from 'react';
import {FlatList, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Context as OrderContext} from '../context/OrderContext';

import ProductDetail from '../components/ProductDetail';
const ProductList = ({navigation, title, state, list}) => {
  const {addOrder} = useContext(OrderContext);

  return (
    <>
      {list === 'horizontal' ? (
        <View style={styles.containerHorizonatl}>
          <Text style={styles.titleStyleHorizontal}>{title}</Text>
          <FlatList
            data={state}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => addOrder(item._id)}>
                  <ProductDetail
                    list="horizontal"
                    business_id={item.business_id}
                    result={item}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.containerVertical}>
          <Text style={styles.titleStyleVertical}>{title}</Text>
          <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => addOrder(item._id)}>
                  <ProductDetail business_id={item.business_id} result={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleStyleHorizontal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    padding: 5,
    textTransform: 'capitalize',
  },
  titleStyleVertical: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },

  containerHorizonatl: {
    marginBottom: 20,
  },
  containerVertical: {},
});

export default withNavigation(ProductList);

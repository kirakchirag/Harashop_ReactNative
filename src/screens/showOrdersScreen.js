import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Context as ProductContext} from '../context/ProductContext';

const showOrdersScreen = ({navigation}) => {
  const {state} = useContext(ProductContext);

  const result = navigation.getParam('result');

  const product_array = result.products;
  const intersection = state.products.filter((element) =>
    product_array.includes(element._id),
  );
  const inter = intersection.map((element) => {
    return element._id;
  });

  const res = inter.reduce((a, b) => {
    const l = product_array.filter((e) => e === b).length;
    if (l) a[b] = l;
    return a;
  }, {});

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={intersection}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <View style={styles.ViewStyle}>
              <Text>Product Name: {item.product_name}</Text>

              <Text>Price: {item.price}</Text>
              <Text>Quantity: {res[item._id]}</Text>
              {item.discount ? <Text>Discount:{item.discount} Rs.</Text> : null}
            </View>
          );
        }}
      />
      <Text style={styles.priceStyle}>Total Price = {result.total_price}</Text>
    </View>
  );
};
showOrdersScreen.navigationOptions = {
  title: 'My Orders',
  headerStyle: {
    backgroundColor: '#f9627c',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',

  headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
  ViewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 15,
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginVertical: 10,
  },
});

export default showOrdersScreen;

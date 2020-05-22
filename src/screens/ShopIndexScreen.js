import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ProductList from '../components/ProductList';
import {Context as ProductContext} from '../context/ProductContext';
import SearchBar from '../components/SearchBar';
import OrderCart from '../components/orderCart';
const ShopIndexScreen = ({navigation}) => {
  const {state, showProducts, searchProducts} = useContext(ProductContext);
  const [term, setTerm] = useState('');
  const [found, setFound] = useState(null);
  useEffect(() => {
    showProducts();
  }, []);
  const filterResultsByBusinessId = (bus_id) => {
    return state.products.filter((result) => {
      return result.business_id === bus_id;
    });
  };
  const foundor = () => {
    setFound(true);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SearchBar
        onTermSubmit={() => searchProducts({term, foundor})}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />

      {state.searched_product.length > 0 ? (
        <ProductList list="horizontal" state={state.searched_product} />
      ) : found ? (
        <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>
          Item not found!!
        </Text>
      ) : null}

      <ScrollView>
        <ProductList
          list="horizontal"
          state={filterResultsByBusinessId('5eb7e84386c0a52cd48ee83b')}
          title="Shubham Fast Food"
        />
        <ProductList
          list="horizontal"
          state={filterResultsByBusinessId('5eb7e6fd86c0a52cd48ee82f')}
          title="Sneha Bakery"
        />
        <ProductList
          list="horizontal"
          state={filterResultsByBusinessId('5eb7e8dd86c0a52cd48ee847')}
          title="Shyam Provision Store"
        />
      </ScrollView>
      <View style={styles.fixedView}>
        <OrderCart />
      </View>
    </View>
  );
};
ShopIndexScreen.navigationOptions = {
  title: 'Hara Shop',
  headerStyle: {
    backgroundColor: '#f9627c',
  },
  headerTitleStyle: {
    color: '#fff',
  },

  headerTitleAlign: 'center',
};
const styles = StyleSheet.create({
  fixedView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ShopIndexScreen;

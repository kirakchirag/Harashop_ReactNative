import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ProductList from '../components/ProductList';
import {Context as ProductContext} from '../context/ProductContext';

const CategoryListScreen = ({navigation}) => {
  const category = navigation.getParam('category');

  const {state} = useContext(ProductContext);
  const filterbyPrice = (price) => {
    if (price <= 60) {
      return state.products.filter((result) => {
        return result.price <= price;
      });
    } else if (price > 60 && price < 99) {
      return state.products.filter((result) => {
        return result.price > 60 && result.price <= 99;
      });
    } else {
      return state.products.filter((result) => {
        return result.price > 99 && result.price <= 150;
      });
    }
  };
  const filterbyDiscount = (discount) => {
    if (discount <= 30) {
      return state.products.filter((result) => {
        return result.discount <= discount;
      });
    } else if (discount > 30 && discount <= 60) {
      return state.products.filter((result) => {
        return result.discount > 30 && result.discount < 60;
      });
    } else {
      return state.products.filter((result) => {
        return result.discount >= 60;
      });
    }
  };
  const filterResultsByCategory = (category) => {
    return state.products.filter((result) => {
      return result.category == category;
    });
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {category === 'price' ? (
        <ScrollView>
          <ProductList
            list="horizontal"
            state={filterbyPrice(60)}
            title="Super Savers"
          />
          <ProductList
            list="horizontal"
            state={filterbyPrice(70)}
            title="Money Taxer"
          />
          <ProductList
            list="horizontal"
            state={filterbyPrice(110)}
            title="Super"
          />
        </ScrollView>
      ) : null}
      {category === 'discount' ? (
        <ScrollView>
          <ProductList
            list="horizontal"
            state={filterbyDiscount(70)}
            title="Super Savers"
          />
          <ProductList
            list="horizontal"
            state={filterbyDiscount(50)}
            title="Money Taxer"
          />
          <ProductList
            list="horizontal"
            state={filterbyDiscount(30)}
            title="Super"
          />
        </ScrollView>
      ) : null}
      {category != 'discount' && category != 'price' ? (
        <ProductList
          state={filterResultsByCategory(category)}
          title={category}
        />
      ) : null}
    </View>
  );
};
CategoryListScreen.navigationOptions = {
  title: 'Hara Shop',
  headerStyle: {
    backgroundColor: '#f9627c',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',

  headerTitleAlign: 'center',
};
const styles = StyleSheet.create({});

export default CategoryListScreen;

import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Context as ProductContext} from '../context/ProductContext';
import {Context as OrderContext} from '../context/OrderContext';

const orderDetailScreen = ({navigation}) => {
  const {state} = useContext(ProductContext);
  const {submitOrder} = useContext(OrderContext);

  const ordr = navigation.getParam('result');
  console.log('ordr', ordr);
  const [order, setOrder] = useState(ordr);
  console.log('order', order);

  const addOrder = (id) => {
    setOrder([...order, id]);
  };

  const removeOrder = (id) => {
    for (var i = 0; i < order.length; i++) {
      if (order[i] === id) {
        console.log('order is', order);
        order.splice(i, 1);
        setOrder([...order]);
        console.log('order aew', order);
        break;
      }
    }
  };
  const intersection = state.products.filter((element) =>
    order.includes(element._id),
  );

  const inter = intersection.map((element) => {
    return element._id;
  });

  const res = inter.reduce((a, b) => {
    const l = order.filter((e) => e === b).length;
    if (l) a[b] = l;
    return a;
  }, {});
  var totalprice = 0;
  const calcTotalPrice = () => {
    intersection.forEach((element) => {
      for (let key in res) {
        if (element._id === key) {
          totalprice =
            totalprice +
            element.price * res[key] -
            (element.discount ? element.discount * res[key] : 0);
        }
      }
    });
  };

  calcTotalPrice();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={intersection}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <View style={styles.ViewStyle}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 3,
                }}>
                <Text>Product Name: {item.product_name}</Text>

                <Text>Price: {item.price}</Text>
                <Text>Quantity: {res[item._id]}</Text>
                {item.discount ? (
                  <Text>Discount:{item.discount} Rs.</Text>
                ) : null}
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <TouchableOpacity onPress={() => addOrder(item._id)}>
                  <Icon
                    style={{margin: 10}}
                    name="pluscircleo"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeOrder(item._id)}>
                  <Icon
                    style={{margin: 10}}
                    name="minuscircleo"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <Text style={styles.priceStyle}>Total Price = {totalprice}</Text>
      <View style={styles.fixedView}>
        <TouchableOpacity
          onPress={() => submitOrder({totalprice, order})}
          style={styles.fab}>
          <Icon style={styles.text} name="checkcircleo" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
orderDetailScreen.navigationOptions = {
  title: 'Order',
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
    flexDirection: 'row',
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  fixedView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fab: {
    height: 50,
    width: 50,
    borderRadius: 200,
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9627c',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default orderDetailScreen;

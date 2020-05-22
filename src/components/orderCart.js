import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Badge} from 'react-native-elements';
import {Context as OrderContext} from '../context/OrderContext';
import {withNavigation} from 'react-navigation';

const orderCart = ({navigation}) => {
  const {state} = useContext(OrderContext);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('orderDetail', {result: state.order})
        }
        style={styles.fab}>
        <Icon style={styles.text} name="shopping-cart" />
        <Badge
          status="success"
          value={state.order.length}
          containerStyle={{position: 'absolute', top: -4, right: -4}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default withNavigation(orderCart);

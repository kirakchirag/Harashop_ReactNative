import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Context as OrderContext} from '../context/OrderContext';
import {NavigationEvents} from 'react-navigation';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

const orders = ({navigation}) => {
  const {state, showOrders} = useContext(OrderContext);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={state.orders[0]}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <ListItem
              onPress={() => navigation.navigate('showOrders', {result: item})}
              Component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.95} //
              title={item._id}
              titleStyle={{color: 'black', fontWeight: 'bold'}}
              subtitleStyle={{color: '#ccc', fontStyle: 'italic'}}
              subtitle={item.ordered_at}
              chevron={{color: '#ccc'}}
              bottomDivider
            />
          );
        }}
      />
      <NavigationEvents onWillFocus={showOrders} />
    </View>
  );
};

orders.navigationOptions = {
  title: 'My Orders',
  headerStyle: {
    backgroundColor: '#f9627c',
  },
  headerTitleStyle: {
    color: '#fff',
  },

  headerTitleAlign: 'center',
};
const styles = StyleSheet.create({});

export default orders;

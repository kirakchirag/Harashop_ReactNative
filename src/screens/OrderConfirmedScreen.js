import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
const orderConfirmedScreen = ({navigation}) => {
  const message = navigation.getParam('message');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {message === 'success' ? (
        <View style={styles.ViewStyle}>
          <Text style={styles.textStyle}>
            Your Order has been Submitted Successfully!! Please make Sure You
            Entered Your Current Address, Change In Account!
          </Text>
          <Icon type="antdesign" name="checkcircle" size={40} color="#f9627c" />
        </View>
      ) : (
        <View style={styles.ViewStyle}>
          <Text style={styles.textStyle}>
            Your Order has not been Submitted!! Something went Wrong!
          </Text>
          <Icon
            type="entypo"
            name="circle-with-cross"
            size={40}
            color="#f9627c"
          />
        </View>
      )}
    </View>
  );
};

orderConfirmedScreen.navigationOptions = {
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
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 30,
  },
});

export default orderConfirmedScreen;

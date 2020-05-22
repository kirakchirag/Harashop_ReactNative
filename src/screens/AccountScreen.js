import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Button,
  View,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Entypo';

const AccountScreen = () => {
  var srt = null;
  var ct = null;
  var st = null;
  var hn = null;
  const toastWithDurationHandler = (message) => {
    if (message === 'success') {
      ToastAndroid.show('Profile Updated Successfully!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Something Went Wrong!', ToastAndroid.SHORT);
    }
  };

  const {state, signout, profileUpdate} = useContext(AuthContext);

  if ('type' in state) {
    if ('street' in state.type.user) {
      srt = state.type.user.street;
    }
    if ('city' in state.type.user) {
      ct = state.type.user.city;
    }
    if ('house_no' in state.type.user) {
      hn = state.type.user.house_no;
    }
    if ('state_r' in state.type.user) {
      st = state.type.user.state_r;
    }
  }

  const [street, setStrt] = useState(srt);
  const [state_r, setStat] = useState(st);
  const [city, setCty] = useState(ct);
  const [house_no, setHn] = useState(hn);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff'}}
      forceInset={{top: 'always'}}>
      <View style={styles.cardStyle}>
        <Image
          style={styles.avatarStyle}
          source={require('../../assets/excercise.png')}
        />

        {'type' in state ? (
          <Text style={styles.textStyle}>{state.type.user.email}</Text>
        ) : null}
        {'type' in state ? (
          <TextInput
            value={house_no}
            onChangeText={setHn}
            placeholder="House No..."
            style={styles.InputStyle}
          />
        ) : null}
        {'type' in state ? (
          <TextInput
            value={street}
            onChangeText={setStrt}
            placeholder="Street"
            style={styles.InputStyle}
          />
        ) : null}
        {'type' in state ? (
          <TextInput
            value={city}
            onChangeText={setCty}
            placeholder="City"
            style={styles.InputStyle}
          />
        ) : null}
        {'type' in state ? (
          <TextInput
            value={state_r}
            onChangeText={setStat}
            placeholder="State"
            style={styles.InputStyle}
          />
        ) : null}
        <Spacer>
          <Button
            style={{width: 30}}
            color="#f8627c"
            title="Sign Out"
            onPress={signout}
          />
        </Spacer>

        <TouchableOpacity
          onPress={() =>
            profileUpdate({
              house_no,
              street,
              state_r,
              city,
              toastWithDurationHandler,
            })
          }>
          <Text style={{color: '#f8627c', textAlign: 'center'}}>Update</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color: '#ccc', margin: 20}}>
        Developer: <Icon name="mail" /> chirag@wittyspots.com
      </Text>
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = {
  title: 'My Account',
  headerStyle: {
    backgroundColor: '#f9627c',
  },
  headerTitleStyle: {
    color: '#fff',
  },

  headerTitleAlign: 'center',
};
const styles = StyleSheet.create({
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    textTransform: 'capitalize',
    borderWidth: 1,
    width: 200,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    alignSelf: 'center',
  },
  InputStyle: {
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: '#ccc',
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
  },
  avatarStyle: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  reachStyle: {
    display: 'flex',
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default AccountScreen;

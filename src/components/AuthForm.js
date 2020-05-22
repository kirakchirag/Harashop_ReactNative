import React, {useState} from 'react';
import {View, Button} from 'react-native';
import Spacer from './Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from '../components/Spinner';

import {Text, Input} from 'react-native-elements';

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
  icon_name,
  loader,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Spacer>
        <Text style={{textAlign: 'center'}} h3>
          {headerText}
          <Icon
            name={icon_name}
            style={{color: '#f8627c', fontSize: 40, margin: 15}}
          />
        </Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          label="Email"
          placeholder="Enter Your Email"
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          label="Password"
          placeholder="Enter Your Password"
        />
      </Spacer>
      {errorMessage ? (
        <Text style={{color: 'red', textAlign: 'center'}}>{errorMessage}</Text>
      ) : null}
      {loader == true ? (
        <Spinner color="#f8627c" size="small" />
      ) : (
        <Spacer>
          <Button
            onPress={() => onSubmit({email, password})}
            color="#f8627c"
            raised
            title={submitButtonText}
          />
        </Spacer>
      )}
    </View>
  );
};

export default AuthForm;

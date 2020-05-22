import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.viewStyle}>
      <Icon name="search" style={styles.searchStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search Products..."
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;

import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {SafeAreaView, withNavigation} from 'react-navigation';
import {Text} from 'react-native-elements';
import Flour from '../../assets/flour';
import Vegetable from '../../assets/vegetable';
import Milk from '../../assets/milk';
import Soft from '../../assets/tomato-sauce';
import Bread from '../../assets/bread';
import Price from '../../assets/price-tag';
import Discount from '../../assets/discount';
import Compass from '../../assets/compass';
import Tablet from '../../assets/tablet';
import Toothbrush from '../../assets/toothbrush';

const CategoriesScreen = ({navigation}) => {
  return (
    <SafeAreaView
      forceInset={{top: 'always'}}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'grocery'})
          }>
          <View>
            <Flour style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Grocery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'fruits'})
          }>
          <View>
            <Vegetable style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Veg & Fruits</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'dairy'})
          }>
          <View>
            <Milk style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Dairy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'fast food'})
          }>
          <View>
            <Soft style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Fast Food</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'bakery'})
          }>
          <View>
            <Bread style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Bakery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'price'})
          }>
          <View>
            <Price style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Price</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'health'})
          }>
          <View>
            <Tablet style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Health</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'patanjali'})
          }>
          <View>
            <Image
              source={require('../../assets/patanjali.png')}
              style={styles.imageStyle}
            />
            <Text style={{textAlign: 'center'}}>Patanjali</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'discount'})
          }>
          <View>
            <Discount style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Discount</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'stationary'})
          }>
          <View>
            <Compass style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Stationary</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'gifts'})
          }>
          <View>
            <Image
              source={require('../../assets/bloom.png')}
              style={styles.imageStyle}
            />
            <Text style={{textAlign: 'center'}}>Gifts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {category: 'daily needs'})
          }>
          <View>
            <Toothbrush style={styles.imageStyle} />
            <Text style={{textAlign: 'center'}}>Daily Needs</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

CategoriesScreen.navigationOptions = {
  title: 'Categories',
  headerStyle: {
    backgroundColor: '#f9627c',
  },
  headerTitleStyle: {
    color: '#fff',
  },

  headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default withNavigation(CategoriesScreen);

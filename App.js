import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import AccountScreen from './src/screens/AccountScreen';
import ShopIndexScreen from './src/screens/ShopIndexScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'; 
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SplashScreen from "./src/screens/SplashScreen";
import {Provider as ProductProvider} from "./src/context/ProductContext";
import {Provider as OrderProvider} from "./src/context/OrderContext";
import { Icon } from 'react-native-elements'
import Orders from './src/screens/Orders';
import CategoryListScreen from "./src/screens/CategoryListScreen"
import orderConfirmedScreen from './src/screens/OrderConfirmedScreen';
import showOrdersScreen from './src/screens/showOrdersScreen';


const traclListFlow  =createStackNavigator({
  ShopIndex:ShopIndexScreen,
  orderDetail:OrderDetailScreen,
  orderConfirmed:orderConfirmedScreen

})
const categoryFlow=createStackNavigator({
  Categories:CategoriesScreen,
  CategoryList:CategoryListScreen
})

const orderFlow  =createStackNavigator({
  orders:Orders,
  showOrders:showOrdersScreen

})
const accountFlow  =createStackNavigator({
  Account:AccountScreen

})

traclListFlow.navigationOptions={
  title:"Shop",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="feather" name="search" color={tintColor} size={20} />
  
    
)
  
}
categoryFlow.navigationOptions={
  title:"Categories",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="entypo" name="shop" color={tintColor} size={20} />
  
    
)
  }
orderFlow.navigationOptions={
  title:"My Orders",
    tabBarIcon: ({ tintColor }) => (
        <Icon type="feather" name="shopping-cart" color={tintColor} size={20} />
        
    )
  
    

}
accountFlow.navigationOptions={
  title:"Account",
    tabBarIcon: ({ tintColor }) => (
      <Icon type="font-awesome" name="user" color={tintColor} size={20} />
    
      
  )
  
    

}



const switchNavigator=createSwitchNavigator({

  loginFlow: createStackNavigator({
    Welcome:ResolveAuthScreen,
    Signup:SignupScreen,
    Signin:SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    traclListFlow,
    categoryFlow,
    orderFlow,
    accountFlow,


  },{
    tabBarOptions:{
      showLabel: false,
      activeTintColor: '#f9627c',
          inactiveTintColor: 'black',
          animationEnabled: true,
    swipeEnabled: true,

      
    }
  })



})

const splashnavigator=createSwitchNavigator({
  Splash:SplashScreen,
  switchNavigator


})
const App=createAppContainer(splashnavigator);

export default()=>{
  return(
    <OrderProvider>
      <ProductProvider>
    
  
      <AuthProvider><App ref={(navigator)=>{setNavigator(navigator)}}/></AuthProvider>

    </ProductProvider>
    </OrderProvider>
    
    
    
      )
}
// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';


// Our custom files and classes import

import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Cart from './screens/Cart'
import Search from './screens/Search';
import Category from './screens/Category';
import Product from './screens/Product';
import ImageGallery from './screens/ImageGallery';
import Checkout from './screens/Checkout';
import WishList from './screens/WishList';
import StoreLocation from './screens/StoreLocation';
import Contact from './screens/Contact';
import Newsletter from './screens/Newsletter';

import Login from './screens/Login';
import Signup from './screens/Signup';


export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="welcome" component={Welcome} hideNavBar />
            <Scene key="home" component={Home} modal hideNavBar />
            <Scene key="search" component={Search} modal hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="cart" component={Cart} modal hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="imageGallery" component={ImageGallery} modal hideNavBar />
            <Scene key="checkout" component={Checkout} hideNavBar />
            <Scene key="wishlist" component={WishList} modal hideNavBar />
            <Scene key="storeLocation" component={StoreLocation} modal hideNavBar />
            <Scene key="contact" component={Contact} modal hideNavBar />
            <Scene key="newsletter" component={Newsletter} modal hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }
}

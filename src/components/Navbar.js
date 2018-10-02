/**
* This is the navbar component
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {
  Image
} from 'react-native';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';

// Our custom files and classes import
import Colors from '../Colors';

export default class Navbar extends Component {
  render() {
    return(
      <Header
        style={{backgroundColor: Colors.navbarBackgroundColor}}
        backgroundColor={Colors.navbarBackgroundColor}
        androidStatusBarColor={Colors.statusBarColor}
        noShadow={true}
        >
        {this.props.left ? this.props.left : <Left style={{flex: 1}} />}
        <Body style={styles.body}>
          {/*<Title style={styles.title}>{this.props.title}</Title>*/}
          <Image
            style={{width: 150, height: 39}}
            source={require('../assets/logo2.jpg')}
          />
        </Body>
        {this.props.right ? this.props.right : <Right style={{flex: 1}} />}
      </Header>
    );
  }
}

const styles={
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '100'
  }
};

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
	Container,
	Content,
	View,
	Button,
	Left,
	Right,
	Icon,
	Card,
	CardItem,
	cardBody
} from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../components/Text';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import SideMenuDrawer from '../components/SideMenuDrawer';
import CategoryBlock from '../components/CategoryBlock';

export default class Home extends Component {
	render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }
}

var categories = [
  {
    id: 1,
    title: 'VESTIDOS',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/13/26/clothes-1845375__340.jpg'
  },
  {
    id: 2,
    title: 'ESTERIZOS',
    image: 'https://cdn.pixabay.com/photo/2015/03/26/10/07/young-690958__340.jpg'
  },
  {
    id: 3,
    title: 'TOPS',
    image: 'https://cdn.pixabay.com/photo/2018/09/30/10/26/girl-3713127__340.jpg'
  },
  {
    id: 4,
    title: 'FALDAS & PANTALONES',
    image: 'https://cdn.pixabay.com/photo/2018/09/28/17/05/spacer-3709717__340.jpg'
  },
  {
    id: 5,
    title: 'ACCESORIOS',
    image: 'https://cdn.pixabay.com/photo/2018/09/19/00/38/clothespins-3687611__340.jpg'
  },
  {
    id: 6,
    title: 'CHOMPAS',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/19/57/cold-1284029__340.jpg'
  }
];

/**
* This is the Search file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Header, Body, Icon, Item, Input, Thumbnail, Button, Right, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../components/Text';
import Product from '../components/Product';

export default class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        items: []
      };
  }

  componentWillMount() {
    if(this.props.searchText) {
      this.setState({searchText: this.props.searchText});
      this.search(this.props.searchText);
    }
  }

  render() {
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Header
          searchBar
          rounded
          style={{backgroundColor: Colors.navbarBackgroundColor}}
          backgroundColor={Colors.navbarBackgroundColor}
          androidStatusBarColor={Colors.statusBarColor}
          noShadow={true}
        >
            <Item>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="ios-close" size={32} style={{fontSize: 32}} />
              </Button>
              <Input
                placeholder="Search..."
                value={this.state.searchText}
                onChangeText={(text) => this.setState({searchText: text})}
                onSubmitEditing={() => this.search(this.state.searchText)}
                style={{marginTop: 9}}
              />
              <Icon name="ios-search" onPress={() => this.search(this.state.searchText)} />
            </Item>
          </Header>
          {this.state.items.length <=0 ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="ios-search" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
              <Text style={{color: '#95a5a6'}}>Search a product...</Text>
            </View>
            :
            <Content padder>
                  {this.renderResult()}
            </Content>
          }
      </Container>
    );
  }

  renderResult() {
    let items = [];
    let stateItems = this.state.items
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i+1} />
          </Grid>
        );
      }
    }
    return items;
  }

  search(text) {
    var searchResult = [
      {id: 1, categoryId: 8, title: 'Vestido Puppy', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/19/15/52/puppy-3688871__340.jpg'},
      {id: 2, categoryId: 8, title: 'Vestido Girl', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/07/21/03/55/girl-3551832__340.jpg'},
      {id: 3, categoryId: 9, title: 'Vestido Sunflowes', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/08/29/22/52/sunflowers-3640935__340.jpg'},
      {id: 4, categoryId: 10, title: 'Vestido Woman', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/26/13/07/woman-3704587__340.jpg'},
      {id: 5, categoryId: 13, title: 'Vestido Girl', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/26/16/25/girl-3704998__340.jpg'},
      {id: 6, categoryId: 16, title: 'Vestido Girl 2', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/30/11/17/girl-3713241__340.jpg'},
      {id: 7, categoryId: 16, title: 'Vestido Portrait', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/30/16/48/portrait-3713887__340.jpg'},
      
      {id: 8, categoryId: 16, title: 'Vestido Short Rojo', price: 'S/. 59.90', image: "https://cdn.pixabay.com/photo/2018/09/30/10/21/girl-3713110__340.jpg"},
      {id: 9, categoryId: 16, title: 'Vestido Short Rojo', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/30/10/21/girl-3713103__340.jpg'},
      {id: 10, categoryId: 16, title: 'Vestido Short Rojo', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/30/10/21/girl-3713104__340.jpg'},
      {id: 11, categoryId: 16, title: 'Vestido Short Rojo', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435__340.jpg'},
      {id: 12, categoryId: 16, title: 'Vestido Short Rojo', price: 'S/. 59.90', image: 'https://cdn.pixabay.com/photo/2018/09/30/10/26/girl-3713125__340.jpg'},
    ];
    this.setState({items: searchResult});
  }

}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import VScrollScreen from './components/ScrollScreen'
import HScrollScreen from './components/HorizScroll'
import ViewPager from './components/ViewPager'
import BasicFlatList from './components/FlatListScreen'
import HorizontalFlatList from './components/HorizontalFlatList'
import BasicSectionList from './components/BasicSectionList'

class MainScreen extends React.Component {
  static navigationOptions = {
        title: 'Home',
    };
  
  constructor(props){
    super(props)
  }

  render() {
    const {navigate} = this.props.navigation;
    return(      
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Button title='Movie List' onPress={() => navigate('Home')}/>
        <Button title='Vertical Scroll' onPress={() => navigate('VScroll')}/>
        <Button title='Horizontal Scroll' onPress={() => navigate('HScroll')}/>
        <Button title='View Pager' onPress={() => navigate('ViewP')}/>
        <Button title='FlatList' onPress={() => navigate('FlatList')}/>
        <Button title='Horizontal FlatList' onPress={() => navigate('HFlatList')}/>
        <Button title='Section List' onPress={() => navigate('SecList')}/>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {    
    Main: MainScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
    VScroll: VScrollScreen,
    HScroll: HScrollScreen,
    ViewP: ViewPager,
    FlatList: BasicFlatList,
    HFlatList: HorizontalFlatList,
    SecList: BasicSectionList
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
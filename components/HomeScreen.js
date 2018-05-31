import React from 'react';
import { Button, View, Text, StyleSheet, ListView, TouchableHighlight, YellowBox} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'List of movies',
  };

  constructor(props){
      super(props)
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
      
      this.state = {
          dataSource: ds.cloneWithRows([])
      }
  }

  componentDidMount(){
      var titles = [];
      fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) =>{
          var movies = responseJson.movies;
          for(var i = 0; i < movies.length; i++){
              titles.push(movies[i].title);
          }
              this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(titles)
              })
          })
  }

  render() {
    return (
      <View>
        <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  renderRow(dataRow){
       return(
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', {name: dataRow})}>
            <View style={styles.cell}>
                <Text>{dataRow}</Text>
            </View>
        </TouchableHighlight>
       )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cell:{
      borderBottomWidth:1,
      borderBottomColor:'gray',
      paddingTop:15,
      paddingBottom:15,
      alignItems:'center'
  },
   
});
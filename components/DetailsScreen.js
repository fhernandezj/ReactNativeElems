import React from 'react';
import { Button, View, Text, TextInput, YellowBox, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class DetailsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.navigation.state.params.name,
      typedText: 'Please type your text'
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`
  });

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 50, backgroundColor: '#66cdaa' }}>
          <TextInput style={{
            height: 40,
            margin: 20,
            borderColor: 'gray',
            padding: 10,
            borderWidth: 1
          }}
          keyboardType = 'email-address'
          placeholder = 'Enter your email'
          autoFocus = {true}
          onChangeText={
            (text) => {
              this.setState(
                (previousState) => {
                  return {
                    typedText: text
                  };
                }
              )
            }
          }/>
          <TextInput style={{
            height: 40,
            margin: 20,
            borderColor: 'gray',
            padding: 10,
            borderWidth: 1
          }}
          keyboardType = 'default'
          secureTextEntry = {true}
          placeholder = 'Enter your password'
          />
        </View>
        <View style={{ flex: 50, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text>{this.state.typedText}</Text>
          <Button onPress={() => {
              Alert.alert("You pressed the button")
            }}
            title="This is a button"
            color="green">
            
          </Button>
        </View>
      </View>
    );
  }
}
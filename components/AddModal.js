import React from 'react';
import { Button, 
    View, Platform,
    Text, Dimensions,
    YellowBox,
    StyleSheet,
    FlatList,
    Image,
    Alert, TextInput,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Modal from 'react-native-modalbox'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import flatListData from '../data/flatListData'

var screen  = Dimensions.get('window');
export default class AddModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render(){
        return(
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS == 'ios' ? 38 : 8,
                    shadowRadius: 10,
                    width: screen.width-80,
                    height: 280
                }}
                position='center'
                backdrop={true}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New food's description</Text>
                <TextInput 
                    style={{
                        height: 40,
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                    }}
                    placeholder="Enter new food's name"
                    value = {this.state.newFoodName}
                    onChangeText = {(text) => this.setState({newFoodName: text})}
                />
                <TextInput 
                    style={{
                        height: 40,
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                    }}
                    placeholder="Enter new food's description"
                    value = {this.state.newFoodDescription}
                    onChangeText = {(text) => this.setState({newFoodDescription: text})}
                />
                <Button
                    title='Save'
                    style={{fontSize: 18, color:'white'}}
                    onPress={() => {
                        const newKey = this.generateKey(10);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            foodDescription: this.state.newFoodDescription,
                            url: "https://carta.menu/assets/img/tmp/food_default.jpg"
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>                    
                </Button>
            </Modal>
        )
    }
}
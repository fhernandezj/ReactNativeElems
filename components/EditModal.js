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
export default class EditModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            FoodName: '',
            FoodDescription: ''
        }
    }
    showEditModal = (editingFood, flatListItem) => {
        this.setState({
            key: editingFood.key,
            FoodName: editingFood.name,
            FoodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        })
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
                    placeholder="Enter food's name"
                    value = {this.state.FoodName}
                    onChangeText = {(text) => this.setState({FoodName: text})}
                />
                <TextInput 
                    style={{
                        height: 40,
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                    }}
                    placeholder="Enter food's description"
                    value = {this.state.FoodDescription}
                    onChangeText = {(text) => this.setState({FoodDescription: text})}
                />
                <Button
                    title='Save'
                    style={{fontSize: 18, color:'white'}}
                    onPress={() => {
                        //Update food information
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if(foundIndex < 0){
                            return;
                        }
                        flatListData[foundIndex].name = this.state.FoodName;
                        flatListData[foundIndex].foodDescription = this.state.FoodDescription;
                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}>                    
                </Button>
            </Modal>
        )
    }
}
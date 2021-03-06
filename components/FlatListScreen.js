import React from 'react';
import { Button, 
    View, 
    Text, 
    YellowBox,
    StyleSheet,
    FlatList,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Swipeout from 'react-native-swipeout'
import AddModal from './AddModal'
import EditModal from './EditModal'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import flatListData from '../data/flatListData'

class FlatListItem extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            activeRowKey: null,
            numberOfRefresh: 0
        }
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return{
                numberOfRefresh: prevState.numberOfRefresh + 1
            }
        });
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null){
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        //alert("Update");
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }}
                            ],
                            {cancelable: true}
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return(
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                }}>
                    <Image
                        source={{uri: this.props.item.url}}
                        style={{width: 100, height: 100, margin: 5}}/>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem : {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            deletedRowKey: null
        });
    }

    refreshFlatList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
        console.log(flatListData);
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return{
            title: 'Flat List',
            headerRight: (
                <TouchableOpacity style={{
                    flex: 1, 
                    justifyContent: 'center', 
                    height: 56, width: 56, 
                    padding: 10
                    }}
                    onPress={() => params._onPressAdd()}>
                    <Image style={{height: 36, width: 36}} source={require('../images/add_button.png')}/>
                </TouchableOpacity>
            )
        }
    };

    componentWillMount(){
        this.props.navigation.setParams({
            _onPressAdd: this._onPressAdd.bind(this)
        })
    }
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    ref = {"flatList"}
                    data={flatListData}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>
                            </FlatListItem>
                        );
                    }}>
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>
                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>
                </EditModal>
            </View>
        )
    }
}
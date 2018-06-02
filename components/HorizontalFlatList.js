import React from 'react';
import {
    AppRegistry,
    FlatList, StyleSheet, Text, View, Image, ImageBackground,
    Alert, Platform, TouchableHighlight, TouchableOpacity
} from 'react-native';

import {horizontalStatus, horizontalFlatListData} from '../data/horizontalFlatListData'
import Icon from 'react-native-vector-icons/Ionicons'

class HorizontalFlatListItem extends React.Component{
    render(){
        return(
            <View 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 98,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    margin: 4
                }}>
                <Text 
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 20
                    }}>{this.props.item.hour}</Text>
                <Icon name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android} />
                <Text 
                    style={{
                        fontSize: 16,
                        color: 'white',
                        margin: 20
                    }}>{this.props.item.degrees} °F</Text>
            </View>
        )
    }
}

export default class HorizontalFlatList extends React.Component {
    render(){
        return(
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }} >
                    <Image 
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                        source ={require('../images/arco-iris.jpg')} />
                </View>
                <View style={{ height: 150 }}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        horizontal={true}
                        data = {horizontalFlatListData}
                        renderItem={({item, index}) => {
                            return(
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                </HorizontalFlatListItem>
                            )
                        }}
                        keyExtractor={(item, index) => item.hour}
                        />
                </View>
            </View>
        )
    }
}
import React from 'react';
import { Button, 
    View, 
    Text, 
    YellowBox,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import flatListData from '../data/flatListData'

class FlatListItem extends React.Component {
    render(){
        return(
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
    componentWillMount(){
        console.log(flatListData)
    }
    static navigationOptions = {
        title: 'Flat List',
    };
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>
                        );
                    }}>
                </FlatList>
            </View>
        )
    }
}
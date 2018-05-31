import React from 'react';
import { Button, 
    View, 
    Text, 
    YellowBox,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    StyleSheet,
    ViewPagerAndroid
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class ViewPagerScreen extends React.Component {
    static navigationOptions = {
        title: 'View Pager',
    };
    render(){
        return(
            <ViewPagerAndroid 
                style={{flex: 1}}
                initialPage={0}
                onPageScroll={(event) => {
                    //Event described here
                }}
                onPageScrollStateChanged={(state) => {
                    console.log(`Scrolling state = ${state}`);
                }}
                onPageSelected={(event) => {
                    console.log(`Scrolled to page: ${event.nativeEvent.position}`);
                }}>
                <View style={{backgroundColor: 'lightseagreen'}}>
                    <Text style={styles.textStyle}>Screen 1</Text>
                </View>
                <View style={{backgroundColor: 'palevioletred'}}>
                    <Text style={styles.textStyle}>Screen 2</Text>
                </View>
                <View style={{backgroundColor: 'salmon'}}>
                    <Text style={styles.textStyle}>Screen 3</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
});